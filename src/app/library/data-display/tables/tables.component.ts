import { Component, ContentChildren, Input, QueryList, SimpleChanges } from '@angular/core';
import { IPagination } from "../../navigation/pagination/IPagination";
import { ColumnComponent } from './column/column.component';

export enum SortDirection{ ASC, DESC }

@Component({
  selector: 'atc-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})

export class TablesComponent {
  @Input() tableRows: any[] = [];
  @Input() defaultSortDirection!:SortDirection;
  @Input() defaultSortKey!:string;

  @ContentChildren(ColumnComponent) columnsQueryList!: QueryList<ColumnComponent>;

  columns: ColumnComponent[] = [];
  rows: any[] = [];
  sortDirection!:SortDirection;
  sortKey!:string;

  tablePagination: IPagination = {
    currentPage: 0,
    pageSize: 5,
    numberOfItems: 0,
    availablePageSizes: [5,10,15,20]
  };  

  getPropertyValue<T, K extends keyof T>(object: T, propertyName: K): T[K] {
    return object[propertyName];
  }

  ngOnInit(){
    this.tablePagination.numberOfItems = this.tableRows.length;
    this.rows = this.tableRows;
    this.sortKey = this.defaultSortKey;
    this.sortDirection = this.defaultSortDirection;
  }

  ngAfterContentInit() {
    this.columns = this.columnsQueryList.toArray();
    this.applyPaginationItems();
  }

  private applyPaginationItems(){
    const totalItems:number = this.tablePagination.numberOfItems;
    const pageSize:number = this.tablePagination.pageSize;
    const lastPage:number = Math.ceil(totalItems / pageSize);
    let currentPage:number = this.tablePagination.currentPage;

    if (currentPage > lastPage) {
      currentPage = lastPage-1;
      this.tablePagination.currentPage = currentPage;
    }
  
    const startIndex:number = currentPage * pageSize;
    const endIndex:number = Math.min(+startIndex + +pageSize, totalItems);

    const sortDirection : SortDirection = this.sortDirection ?? this.defaultSortDirection;
    const sortKey : string = this.sortKey ?? this.defaultSortKey;

    this.rows = this.tableRows
      .sort((a, b) => this.compareByKey(a, b, sortKey, sortDirection))
      .slice(startIndex, endIndex);

    this.tablePagination.currentPage = currentPage;
    this.tablePagination.numberOfItems = totalItems;
    this.tablePagination.pageSize = pageSize;
  }

  compareByKey(a: any, b: any, sortKey:string, sortDirection: SortDirection): number {   
    if (a[sortKey] < b[sortKey]) {
      return sortDirection === SortDirection.DESC ? -1 : 1;
    }

    if (a[sortKey] > b[sortKey]) {
      return sortDirection === SortDirection.DESC ? 1 : -1;
    }

    return 0;
  }

  changeOrder(fieldNameClicked:string){
    this.sortKey = fieldNameClicked;
    this.sortDirection = this.sortDirection == SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC;
    this.applyPaginationItems();
  }

  onPageSizeChange(pageSizeSelected:number) {
    this.tablePagination.pageSize = pageSizeSelected;
    this.applyPaginationItems();
  }

  onPageClicked(pageClicked:number){
    this.tablePagination.currentPage = Number(pageClicked) - 1;
    this.applyPaginationItems();
  }

  onNextClicked(){
    this.tablePagination.currentPage += 1;
    this.applyPaginationItems();
  }

  onPreviousClicked(){
    this.tablePagination.currentPage -= 1;
    this.applyPaginationItems();
  }
}

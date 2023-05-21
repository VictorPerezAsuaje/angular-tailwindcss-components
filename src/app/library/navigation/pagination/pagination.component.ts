import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPagination } from './IPagination';

interface PaginationItem{
  type:string,
  value:string
}

@Component({
  selector: 'atc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})

export class PaginationComponent {
  @Input() pagination!:IPagination;

  @Output() onPageSizeChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onPageClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() onNextClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() onPreviousClicked: EventEmitter<number> = new EventEmitter<number>();

  selectedPage!:number;
  lastPage: number = 0;
  paginationItems:PaginationItem[] = [];
  selectedPageSize!:number;

  ngOnInit(){
    this.selectedPage = this.pagination.currentPage ?? 0;
    this.selectedPageSize = this.pagination.pageSize;
    this.applyPaginationItems();
  }

  private loadPaginationItems(numberOfPages:number){
    this.paginationItems = [];

    for(let i :number = 0; i < numberOfPages; i++){      
      if(i === this.pagination.currentPage){
        //this.paginationItems?.push(`_${i+1}`);
        this.paginationItems?.push({ type: "standard", value: `${i+1}`});
        continue;
      }

      if(i === this.lastPage-1){
        //this.paginationItems?.push(`←${i+1}`);
        this.paginationItems?.push({ type: "lastNumbers", value: `${i+1}`});
        continue;
      }

      if([0,1,2].includes(i) && i !== this.pagination.currentPage){
        //this.paginationItems?.push(`→${i+1}`);
        this.paginationItems?.push({ type: "firstNumbers", value: `${i+1}`});
        continue;
      }

      let lastItem = this.paginationItems[this.paginationItems.length-1];
      if(lastItem.type !== "dots"){
        //this.paginationItems?.push(`...`);
        this.paginationItems?.push({ type: "dots", value: `...`});
      }
    }
  }

  private applyPaginationItems(){
    const totalItems:number = this.pagination.numberOfItems;
    const pageSize:number = this.pagination.pageSize;
    this.lastPage = Math.ceil(totalItems / pageSize);            
    this.loadPaginationItems(this.lastPage);
  }

  onPageSizeChangeHandler(pageClicked:any) {   
    const pageSize:number = pageClicked.target.value;
    const lastPage:number = Math.ceil(this.paginationItems.length / pageSize);

    if (this.pagination.currentPage > lastPage)
      this.pagination.currentPage = lastPage-1;    

    this.onPageSizeChange.emit(pageSize);
    this.applyPaginationItems();
  }

  convertToNumber(value:string):number { return Number(value); }

  onPageClickedHandler(pageClicked:string){
    this.selectedPage = Number(pageClicked) - 1;
    this.onPageClicked.emit(Number(pageClicked));
    this.applyPaginationItems();
  }

  onNextClickedHandler(nextPage:number){
    this.selectedPage = Number(nextPage);
    this.onNextClicked.emit(Number(nextPage));
    this.applyPaginationItems();
  }

  onPreviousClickedHandler(previousPage:number){
    this.selectedPage =  Number(previousPage);
    this.onPreviousClicked.emit(Number(previousPage));
    this.applyPaginationItems();
  }
}

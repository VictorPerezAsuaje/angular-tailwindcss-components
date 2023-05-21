import { Component, Input } from '@angular/core';

@Component({
  selector: 'atc-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})

export class ColumnComponent {
  @Input() fieldName!: string;
  @Input() headerName?: string;
  @Input() hasIcon:boolean = false;
  @Input() iconCssClass?:string;
}

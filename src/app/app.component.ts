import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { SortDirection } from './library/data-display/tables/tables.component';

export interface ILanguageString{
  language:string,
  key:string,
  value:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public sortDirection = SortDirection;
  rows:any[] = [];

  ngOnInit(){
    const numberOfObjects = 100;

    for (let i = 0; i < numberOfObjects; i++) {
      this.rows.push({
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        company: faker.company.name()
      });
    }
  }
}

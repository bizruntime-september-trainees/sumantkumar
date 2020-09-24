import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angularsecond';
  //implemention of nggroup
  constructor() {}
  Countrydetails: any[] = [
    {
      conntry: 'india',
      people: [
        {
          name: 'sumant',
        },
        {
          name: 'saurav',
        },
        {
          name: 'preeti',
        },
      ],
    },
    {
      conntry: 'uk',
      people: [
        {
          name: 'samuel',
        },
        {
          name: 'hara',
        },
        {
          name: 'herry',
        },
      ],
    },
  ];
}

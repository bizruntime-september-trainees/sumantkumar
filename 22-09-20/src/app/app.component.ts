import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<p>The hero's birthday is {{ birthday | date }}</p>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angmon';
  birthday = new Date(1988, 3, 15);
  employees: any = [
    {
      code: '001',
      name: 'sumant',
      gender: 'male',
      salary: '10000',
    },
    {
      code: '002',
      name: 'ravi',
      gender: 'male',
      salary: '10000',
    },
    {
      code: '001',
      name: 'preeti',
      gender: 'female',
      salary: '10000',
    },
    {
      code: '001',
      name: 'sumant',
      gender: 'male',
      salary: '10000',
    },
  ];

  onSubmit(data) {
    console.warn(data);
  }
  inputvariable = 'hi i am your parents';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.sass'],
})
export class PracticeComponent implements OnInit {
  cols: number = 3;
  bdr: number = 5;
  constructor() {}
  ngOnInit(): void {}
  people: any[] = [
    {
      name: 'sumant kumar',
      country: 'india',
    },
    {
      name: 'ravi yada',
      country: 'america',
    },
    {
      name: 'preeti shah',
      country: 'china',
    },
    {
      name: 'saurav',
      country: 'bangaldesh',
    },
  ];
  getcolor(country) {
    switch (country) {
      case 'india':
        return 'green';
      case 'america':
        return 'green';
      case 'china':
        return 'yellow';
      case 'bangaldesh':
        return 'red';
    }
  }
  showdata() {
    console.log('welcome to event binding');
  }
}

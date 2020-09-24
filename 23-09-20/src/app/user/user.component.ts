import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() hero;
  componentName = 'user';
  constructor() {}

  ngOnInit(): void {}

  sum(a, b) {
    return a + b;
  }
}

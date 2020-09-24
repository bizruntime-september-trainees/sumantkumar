import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: `hello sumant`, inline html
  styleUrls: ['./app.component.sass'],
  // styles: ['h1{background-color:orange}'], inline css
})
export class AppComponent {
  title = 'welcome to angular project';
  //implememation of stuctural directive
  checkngif = true;
  //implemention code for components directives
  btnclick() {
    alert('you click me');
  }
  public choose = '';
  setvalue(drp: any) {
    this.choose = drp.target.value;
  }
  Students: any[] = [
    {
      name: 'sumant kumar',
    },
    {
      name: 'saurav kumar',
    },
    {
      name: 'ravi yadav',
    },
    {
      name: 'preeti kumari',
    },
  ];
}

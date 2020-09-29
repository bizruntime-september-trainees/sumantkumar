import { sampleData } from './datasource';
import { Component, OnInit } from '@angular/core';
import {
  PageSettingsModel,
  SortSettingsModel,
} from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.data = sampleData;
    this.pageSettings = {
      pageSize: 6,
    };
    this.sortSettings = {
      columns: [
        { field: 'taskName', direction: 'Ascending' },
        { field: 'taskID', direction: 'Descending' },
      ],
    };
  }
  public data: object[];
  title = 'AngTree';
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;
}

import { sampleData } from './../datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { Ajax } from '@syncfusion/ej2-base';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
@Component({
  selector: 'app-selfbinding',
  templateUrl: './selfbinding.component.html',
  styleUrls: ['./selfbinding.component.css'],
})
export class SelfbindingComponent implements OnInit {
  constructor() {}
  public data: object[];
  public dataManager: DataManager;
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent;
  ngOnInit(): void {
    this.data = sampleData;
    this.dataManager = new DataManager({
      url:
        'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
      adaptor: new WebApiAdaptor(),
      crossDomain: true,
    });
  }
  click(e: any): any {
    const ajax = new Ajax(
      'https://ej2services.syncfusion.com/production/web-services/api/SelfReferenceData',
      'GET'
    );
    ajax.send();
    ajax.onSuccess = function (data: string) {
      this.treegrid.dataSource = JSON.parse(data);
    }.bind(this);
  }
}

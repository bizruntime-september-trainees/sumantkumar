import { DatabindingModule } from './databinding/databinding.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TreeGridModule,
  PageService,
  SortService,
  FilterService,
} from '@syncfusion/ej2-angular-treegrid';
import { SelfbindingComponent } from './selfbinding/selfbinding.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EnableeditingComponent } from './enableediting/enableediting.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [AppComponent, SelfbindingComponent, DataBindingComponent, EnableeditingComponent, DialogBoxComponent],
  imports: [BrowserModule, AppRoutingModule, TreeGridModule, DatabindingModule],
  providers: [PageService, SortService, FilterService],
  bootstrap: [AppComponent],
})
export class AppModule {}

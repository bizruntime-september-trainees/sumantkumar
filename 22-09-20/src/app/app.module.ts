import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [AppComponent, MypipePipe, StudentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

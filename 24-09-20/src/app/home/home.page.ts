import { HttpClient } from "@angular/common/http";
import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Observable } from "rxjs";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  public items: any;
  // public inputVal: string;
  constructor(public NavCtrl: NavController, public http: HttpClient) {
    this.getData();
  }

  getData() {
    let url = "https://jsonplaceholder.typicode.com/photos";
    // let url = "https://jsonplaceholder.typicode.com/users";
    let data: Observable<any> = this.http.get(url);
    data.subscribe((result) => {
      this.items = result;
      console.log(result);
    });
  }
  // buttonClick() {
  //   alert(this.inputVal);
  // }
}

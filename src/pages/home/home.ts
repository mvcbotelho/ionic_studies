import {Component, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from 'ionic-angular';
import "rxjs/add/operator/map";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {

  private url: string = 'https://api.github.com/users'

  constructor(
    public navCtrl: NavController,
    public http: HttpClient
    ) {
  }

  callUser() {
    this.http.get(this.url + '/mvcbotelho')
      .map(res => {
        console.log('Response', res)
      })
      .subscribe(data => console.log('Data - ', data))
  }
}

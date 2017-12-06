import { AppService,AppGlobal} from './../../app/app.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slides: Array<any> = [];
  categories: Array<any> = [];
  products:Array<any> = [];
  constructor(public navCtrl: NavController) {

  }

}

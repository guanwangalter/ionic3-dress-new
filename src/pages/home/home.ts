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
  spinner1: boolean = true;
  params = {
    favoritesId: 2054400,
    pageNo: 1,
    pageSize: 20
  }
  constructor(public appService: AppService, public navCtrl: NavController) {
    this.getSlides();
    this.getCategories();
    this.getProducts();
  }
//获取幻灯片
  getSlides(){
    var params = {
      favoritesId: 2056439,
      pageNo: 1,
      pageSize: 5
    }
    this.appService.httpGet(AppGlobal.API.getProducts, params,rs =>{
      console.debug(rs);
      this.slides = rs.data;
      this.spinner1 = false;
    })
  }

  getCategories(){
    this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress'}, rs =>{
      console.debug(rs);
      this.products = rs.data;
    })
  }
  getDetails(item){
    console.debug('go details...')
  }
}

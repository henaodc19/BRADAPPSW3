
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})

@Injectable()
export class ContactoPage {
  negocio:any = {};
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }

  sumarType(a,b){
    return a+b;
  }


}

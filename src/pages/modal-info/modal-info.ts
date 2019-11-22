import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';



@IonicPage()
@Component({
  selector: 'page-modal-info',
  templateUrl: 'modal-info.html',
})
export class ModalInfoPage {
  lista:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lista = navParams.get('lista');
    console.log(this.lista);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalInfoPage');
  }

  navegarAtras(){
    this.navCtrl.setRoot(TabsPage);
  }

}

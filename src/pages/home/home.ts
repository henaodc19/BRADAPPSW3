import { AddNegocioPage } from './../add-negocio/add-negocio';
import { Component, Injectable } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { NegociosService } from './../../app/servicios/negocios.service';
import { ModalInfoPage } from '../modal-info/modal-info';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@Injectable()
export class HomePage {
  
  location:any;
  negocios:any = [];

  constructor(public navCtrl: NavController, private geolocation: Geolocation, public NegociosService: NegociosService, public modalController: ModalController) {
    this.NegociosService.getNegocios().valueChanges()
    .subscribe((negociosFB)=>{
      this.negocios = negociosFB;
      console.log(this.negocios);
    })
  }

  adicionarNegocio(){
    this.navCtrl.push(AddNegocioPage);
  }

  prueba(){
    console.log(this.negocios);
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      this.location = resp;
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error de localizacion', error);
     });
  }

  detalleNegocio(lista){
   let modal = this.modalController.create(ModalInfoPage, {lista: lista});
   modal.present();
  }

  

}

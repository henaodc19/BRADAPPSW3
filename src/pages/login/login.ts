import { AutenticacionProvider } from './../../providers/autenticacion/autenticacion';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = null;
  password: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private autenticacionProvider: AutenticacionProvider,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.autenticacionProvider.loginPorEmail(this.email, this.password).then((data) =>{
      const alert = this.alertCtrl.create({
        title: 'Bien!',
        subTitle: 'Loggeado correctamente!',
        buttons: ['OK']
      });
      alert.present();
      console.log(data);
      this.navCtrl.push(TabsPage);
    }).catch((error) => {
      alert("Ocurrio un error");
      console.log(error);
    })
  }

  registro(){
    this.autenticacionProvider.registroPorEmail(this.email, this.password).then((data) =>{
      const alert = this.alertCtrl.create({
        title: 'Bien!',
        subTitle: 'Registrado correctamente!',
        buttons: ['OK']
      });
      alert.present();
      console.log(data);
    }).catch((error) => {
      alert("Ocurrio un error");
      console.log(error);
    })
  }

}

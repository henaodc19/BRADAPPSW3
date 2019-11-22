import { NegociosService } from './../../app/servicios/negocios.service';
import { TabsPage } from './../tabs/tabs';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Negocios } from '../../app/clases/Negocios';

@IonicPage()
@Component({
  selector: 'page-add-negocio',
  templateUrl: 'add-negocio.html',
})

@Injectable()
export class AddNegocioPage {

  negocio = new Negocios;
  categorias = [];
  subCategorias = [];
  ciudades = [];
  validaAddNegocio:any = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public NegociosService: NegociosService,public alertCtrl: AlertController) {
    // this.negocio = navParams.data.negocio || {};
    this.NegociosService.getCategorias().valueChanges()
    .subscribe((categoriasFB)=>{
      this.categorias = categoriasFB;
      console.log(this.categorias);
    })

    this.NegociosService.getSubCategorias().valueChanges()
    .subscribe((subCategoriasFB)=>{
      this.subCategorias = subCategoriasFB;
      console.log(this.subCategorias);
    })

    this.NegociosService.getCiudades().valueChanges()
    .subscribe((getCiudadesFB)=>{
      this.ciudades = getCiudadesFB;
      console.log(this.ciudades);
    })
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNegocioPage');
  }

  //Esta funcion realiza la navegacion raiz y evita a si un boton
  //de back en el home.
  navegarAtras(){
    this.navCtrl.setRoot(TabsPage);
  }

  // guardarNegocio(){
  //   this.negocio.id = Date.now();
  //   this.NegociosService.crearNegocio(this.negocio);
  //   console.log(this.negocio);
  //   const alert = this.alertCtrl.create({
  //     title: 'Listo!',
  //     subTitle: 'Negocio guardado correctamente',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  //   this.negocio = {};
  // }

 

  guardarNegocio(){
      this.negocio.id = Date.now();
      this.NegociosService.crearNegocio(this.negocio,this.negocio.ciudadNegocio);
      console.log(this.negocio);
      const alert = this.alertCtrl.create({
      title: 'Listo!',
      subTitle: 'Negocio guardado correctamente',
      buttons: ['OK']
    });
    alert.present();
  }
  
}

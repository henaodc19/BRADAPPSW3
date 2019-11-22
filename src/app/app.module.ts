import { NegociosService } from './servicios/negocios.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContactoPage } from '../pages/contacto/contacto';
import { NegocioPage } from '../pages/negocio/negocio';
import { TabsPage } from '../pages/tabs/tabs';
import { AddNegocioPage } from '../pages/add-negocio/add-negocio';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { Geolocation } from '@ionic-native/geolocation';
import { LoginPage } from '../pages/login/login';
import { AutenticacionProvider } from '../providers/autenticacion/autenticacion';
import { ModalInfoPage } from '../pages/modal-info/modal-info';

export const firebaseConfig = {
  apiKey: "AIzaSyBzwYJPdtB7NJ8r4zYq-90maHA9HjERR1w",
    authDomain: "bradapp-96a59.firebaseapp.com",
    databaseURL: "https://bradapp-96a59.firebaseio.com",
    projectId: "bradapp-96a59",
    storageBucket: "",
    messagingSenderId: "141964053662",
    appId: "1:141964053662:web:597455aa6bf8cf72023f8f"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactoPage,
    NegocioPage,
    TabsPage,
    AddNegocioPage,
    LoginPage,
    ModalInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactoPage,
    NegocioPage,
    TabsPage,
    AddNegocioPage,
    LoginPage,
    ModalInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NegociosService,
    Geolocation,
    LoginPage,
    AutenticacionProvider,
    AutenticacionProvider
  ]
})
export class AppModule {}

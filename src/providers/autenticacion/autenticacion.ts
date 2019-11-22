
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';


@Injectable()
export class AutenticacionProvider {

  constructor(private angularFireAuth2: AngularFireAuth) {
    console.log('Hello AutenticacionProvider Provider');
  }

  loginPorEmail(email: string, password: string){
    return this.angularFireAuth2.auth.signInWithEmailAndPassword(email,password);
 }

 registroPorEmail(email: string, password: string){
     return this.angularFireAuth2.auth.createUserWithEmailAndPassword(email,password);
  }

  getStatus(){
      return this.angularFireAuth2.authState;
  }

  logOut(){
      return this.angularFireAuth2.auth.signOut();
  }

}

import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()

export class AutenticacionService{
    constructor(private angularFireAuth: AngularFireAuth){}

    loginPorEmail(email: string, password: string){
       return this.angularFireAuth.auth.signInWithEmailAndPassword(email,password);
    }

    registroPorEmail(email: string, password: string){
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email,password);
     }

     getStatus(){
         return this.angularFireAuth.authState;
     }

     logOut(){
         return this.angularFireAuth.auth.signOut();
     }
}
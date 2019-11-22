import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';


@Injectable()
export class NegociosService{
    constructor(public afDB: AngularFireDatabase){

    }
    public getNegocios(){
        return this.afDB.list('/Negocios/');
    }

    public getNegocio(id){
        return this.afDB.object('/Negocios/'+ id);
    }

    public crearNegocio(Negocio,Ciudades){
        return this.afDB.database.ref('/Negocios/' + Negocio.id ).set(Negocio);
    }

    public getCategorias(){
        return this.afDB.list('/Categorias/');
    }

    public getSubCategorias(){
        return this.afDB.list('/SubCategorias/');
    }

    public getCiudades(){
        return this.afDB.list('/Ciudades/');
    }
}
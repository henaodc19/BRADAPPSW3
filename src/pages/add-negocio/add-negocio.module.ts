import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNegocioPage } from './add-negocio';

@NgModule({
  declarations: [
    AddNegocioPage,
  ],
  imports: [
    IonicPageModule.forChild(AddNegocioPage),
  ],
})
export class AddNegocioPageModule {}

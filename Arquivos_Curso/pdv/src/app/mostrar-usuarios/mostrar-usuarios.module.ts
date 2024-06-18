import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUsuariosPageRoutingModule } from './mostrar-usuarios-routing.module';

import { MostrarUsuariosPage } from './mostrar-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUsuariosPageRoutingModule
  ],
  declarations: [MostrarUsuariosPage]
})
export class MostrarUsuariosPageModule {}

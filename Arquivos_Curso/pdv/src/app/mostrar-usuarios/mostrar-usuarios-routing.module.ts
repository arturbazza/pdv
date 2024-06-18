import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarUsuariosPage } from './mostrar-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarUsuariosPageRoutingModule {}

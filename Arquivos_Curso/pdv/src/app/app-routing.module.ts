import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'mostrar-usuarios',
    loadChildren: () => import('./mostrar-usuarios/mostrar-usuarios.module').then( m => m.MostrarUsuariosPageModule)
  },
  {
    path: 'mostrar-usuarios/:id/:nome/:cpf/:email/:senha/:nivel',
    loadChildren: () => import('./mostrar-usuarios/mostrar-usuarios.module').then( m => m.MostrarUsuariosPageModule)
  },
  {
    path: 'add-usuario/:id/:nome/:cpf/:email/:senha/:nivel',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'painel-financeiro',
    loadChildren: () => import('./painel-financeiro/painel-financeiro.module').then( m => m.PainelFinanceiroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

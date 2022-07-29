import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';


const routes: Routes = [
  {
    path: '',
    component: UsuarioListComponent
  },
  {
    path: 'cadastro',
    component: UsuarioCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {}

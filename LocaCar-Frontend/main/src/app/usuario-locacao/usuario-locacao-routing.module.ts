import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocacaoVeiculoFormComponent } from './locacao-veiculo-form/locacao-veiculo-form.component';

const routes: Routes = [
  {
    path: '',
    component: LocacaoVeiculoFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioLocacaoRoutingModule {}

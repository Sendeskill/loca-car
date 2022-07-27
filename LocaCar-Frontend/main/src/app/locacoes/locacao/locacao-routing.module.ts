import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitacoesLocacaoComponent } from './solicitacoes-locacao/solicitacoes-locacao.component';


const routes: Routes = [
  {
    path: '',
    component: SolicitacoesLocacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocacaoRoutingModule {}

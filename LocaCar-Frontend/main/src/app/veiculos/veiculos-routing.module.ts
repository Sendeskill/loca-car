import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosDisponiveisComponent } from '../veiculos/veiculos-disponiveis/veiculos-disponiveis.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { VeiculosEmManutencaoComponent } from './veiculos-em-manutencao/veiculos-em-manutencao.component';


const routes: Routes = [
  {
    path: 'disponiveis',
    component: VeiculosDisponiveisComponent
  },
  {
    path: 'manutencao',
    component: VeiculosEmManutencaoComponent
  },
  {
    path: 'cadastro',
    component: CadastroVeiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule {}

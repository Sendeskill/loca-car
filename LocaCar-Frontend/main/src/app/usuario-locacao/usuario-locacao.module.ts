import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocacaoVeiculoFormComponent } from './locacao-veiculo-form/locacao-veiculo-form.component';
import { UsuarioLocacaoRoutingModule } from './usuario-locacao-routing.module';



@NgModule({
  declarations: [
    LocacaoVeiculoFormComponent
  ],
  imports: [
    CommonModule,
    UsuarioLocacaoRoutingModule
  ]
})
export class UsuarioLocacaoModule { }

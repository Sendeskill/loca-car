import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { LocacaoService } from 'src/app/locacoes/locacao/service/locacao.service';
import { StatusLocacaoEnum } from 'src/app/models/enums/status-locacao-enum';
import { Locacao } from 'src/app/models/locacao.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { VeiculoService } from 'src/app/veiculos/services/veiculo.service';
import { forkJoin } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.model';


@Component({
  selector: 'app-solicitacoes-pendentes',
  templateUrl: './solicitacoes-pendentes.component.html',
  styleUrls: ['./solicitacoes-pendentes.component.sass']
})
export class SolicitacoesPendentesComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private locacaoService: LocacaoService,
    private usuarioService: UsuarioService,
    private veiculoService: VeiculoService
  ) { }

  locacoes: Locacao[] = [];
  minhasSolicitacoes: Locacao[] = [];

  usuarioLogado: Usuario;
  loading: boolean = false;
  usuarios: Usuario[] = [];
  veiculos: Veiculo[] = [];

  @Output() loadingEventEmit = new EventEmitter<boolean>();
  

  ngOnInit(): void {

    this.usuarioLogado = this.authService.currentUserValue;
    this.getLocacoes();
  }

  getLocacoes() {
    this.loading = true;
    this.loadingEventEmit.emit(this.loading);
    forkJoin({
      locacoes: this.locacaoService.getLocacoes(),
      usuarios: this.usuarioService.getUsuarios(),
      veiculos: this.veiculoService.getVeiculos(),
    }).subscribe((result) => {
      if(this.usuarioLogado.tipo == 1) {

        this.locacoes = result.locacoes.filter((f) => f.status == StatusLocacaoEnum.pendente).slice(0,5);
      } else {
        this.locacoes = result.locacoes.filter((f) => f.usuarioId == this.usuarioLogado.id).slice(0,5);
      }
      
      this.usuarios = result.usuarios;
      this.veiculos = result.veiculos;
      this.loading = false;
      this.loadingEventEmit.emit(this.loading);
    });
  }

  getUsuarioLocacao(id: number): String {
    return this.usuarios.filter((u) => u.id == id)[0].nome;
  }

  getVeiculoLocacao(id: number): Veiculo {
    return this.veiculos.filter((v) => v.id == id)[0];
  }

  // getLocacoes() {
  //   this.locacaoService.getLocacoes()
  //       .subscribe((result) => {
  //         console.log(result);
          
  //       });
  // }

}

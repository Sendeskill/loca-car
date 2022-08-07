import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/service/auth.service';
import { LocacaoService } from 'src/app/locacoes/locacao/service/locacao.service';
import { StatusLocacaoEnum } from 'src/app/models/enums/status-locacao-enum';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private authService: AuthService,
      private locacaoService: LocacaoService) {
    
  }

  usuarioLogado: Usuario;
  loading: boolean = false;

  totalLocacao: number;
  totalLocacaoAprovada: number;
  totalLocacaoReprovada: number;

  ngOnInit() {

    this.usuarioLogado = this.authService.currentUserValue;
    this.getLocacoes();
  }

  loadData($event) {
    this.loading = $event;
  }

  getLocacoes() {
    this.locacaoService.getLocacoes()
        .subscribe((result) => {
          this.totalLocacao = result.length;
          this.totalLocacaoAprovada = result.filter((f) => f.status == StatusLocacaoEnum.aprovado).length;
          this.totalLocacaoReprovada = result.filter((f) => f.status == StatusLocacaoEnum.reprovado).length;
        });
  }


 
}

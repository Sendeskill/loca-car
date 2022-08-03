import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { StatusLocacaoEnum } from 'src/app/models/enums/status-locacao-enum';
import { Locacao } from 'src/app/models/locacao.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Veiculo } from 'src/app/models/veiculo.model';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { VeiculoService } from 'src/app/veiculos/services/veiculo.service';
import Swal from 'sweetalert2';
import { LocacaoService } from '../service/locacao.service';



@Component({
  selector: 'app-solicitacoes-locacao',
  templateUrl: './solicitacoes-locacao.component.html',
  styleUrls: ['./solicitacoes-locacao.component.sass']
})
export class SolicitacoesLocacaoComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'dataLocacao',
    'veiculo',
    'placa',
    'cor',
    'anoFabricacao',
    'solicitante',
    'status',
    'actions'
  ];
  
  dataSource2 = new MatTableDataSource<Locacao>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  usuarios: Usuario[] = [];
  veiculos: Veiculo[] = [];
  loading: boolean = false;

  constructor(private locacaoService: LocacaoService,
              private usuarioService: UsuarioService,
              private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator;
    this.getLocacoes();
  }

  getLocacoes() {
    this.loading = true;
    forkJoin({
      locacoes: this.locacaoService.getLocacoes(),
      usuarios: this.usuarioService.getUsuarios(),
      veiculos: this.veiculoService.getVeiculos(),
    }).subscribe((result) => {
      this.dataSource2 = new MatTableDataSource<Locacao>(result.locacoes);
      this.usuarios = result.usuarios;
      this.veiculos = result.veiculos;
      this.loading = false;
    });
  }

  getUsuarioLocacao(id: number): String {
    return this.usuarios.filter((u) => u.id == id)[0].nome;
  }

  getVeiculoLocacao(id: number): Veiculo {
    return this.veiculos.filter((v) => v.id == id)[0];
  }

  getStatus(status: number) {
    switch (status) {
      case StatusLocacaoEnum.aprovado:
        return 'Aprovado';
      case StatusLocacaoEnum.reprovado:
        return 'Reprovado';
      case StatusLocacaoEnum.pendente:
        return 'Pendente';
      default:
        break;
    }
  }

  aprovar(locacao: Locacao) {
   
    this.loading = true;
    locacao.status = StatusLocacaoEnum.aprovado;

    this.locacaoService.changeStatus(locacao)
        .subscribe((result) => {
          if(result['success']) {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Locação aprovada com sucesso!',
            })
          this.loading = false;
          this.getLocacoes();
          }
        });
  }

  reprovar(locacao: Locacao) {
    locacao.status = StatusLocacaoEnum.reprovado;

    this.locacaoService.changeStatus(locacao)
        .subscribe((result) => {
          if(result['success']) {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Locação reprovada com sucesso!',
            })
          this.loading = false;
          this.getLocacoes();
          }
        });
  }
}

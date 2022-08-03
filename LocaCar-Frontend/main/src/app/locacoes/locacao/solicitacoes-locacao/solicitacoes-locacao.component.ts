import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { Locacao } from 'src/app/models/locacao.model';
import { Usuario } from 'src/app/models/usuario.model';
import { Veiculo } from 'src/app/models/veiculo.model';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { VeiculoService } from 'src/app/veiculos/services/veiculo.service';
import { LocacaoService } from '../service/locacao.service';

export interface PeriodicElement {
  name: string;
  no: number;
  gender: string;
  email: string;
  address: string;
  mobile: number;
  salary: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    no: 1,
    name: 'John Doe',
    gender: 'male',
    email: 'test@example.com',
    address: '729 S. Paris Hill St',
    mobile: 1234567890,
    salary: 120000
  },
  {
    no: 2,
    name: 'Sarah Smith',
    gender: 'female',
    email: 'test@example.com',
    address: '9003 Lake Street Hinesville',
    mobile: 1234567890,
    salary: 170000
  },
  {
    no: 3,
    name: 'Airi Satou',
    gender: 'male',
    email: 'test@example.com',
    address: '848 Old Durham Street Piedmont',
    mobile: 1234567890,
    salary: 150000
  },
  {
    no: 4,
    name: 'Angelica Ramos',
    gender: 'male',
    email: 'test@example.com',
    address: '8008 Anderson Drive Titusville',
    mobile: 1234567890,
    salary: 190000
  },
  {
    no: 5,
    name: 'Ashton Cox',
    gender: 'female',
    email: 'test@example.com',
    address: '620 East Ave. Dundalk',
    mobile: 1234567890,
    salary: 140000
  },
  {
    no: 6,
    name: 'Cara Stevens',
    gender: 'male',
    email: 'test@example.com',
    address: '9641 Delaware Street Camp Hill',
    mobile: 1234567890,
    salary: 220000
  },
  {
    no: 7,
    name: 'Jens Brincker',
    gender: 'male',
    email: 'test@example.com',
    address: '83 Pennsylvania Road',
    mobile: 1234567890,
    salary: 170000
  },
  {
    no: 8,
    name: 'Mark Hay',
    gender: 'female',
    email: 'test@example.com',
    address: '786 Lake Forest Rd. Biloxi',
    mobile: 1234567890,
    salary: 320000
  },
  {
    no: 9,
    name: 'Anthony Davie',
    gender: 'male',
    email: 'test@example.com',
    address: '226 Heritage Dr. Durham',
    mobile: 1234567890,
    salary: 620000
  },
  {
    no: 10,
    name: 'Sue Woodger',
    gender: 'male',
    email: 'test@example.com',
    address: '7 SE. Pumpkin Hill Lane',
    mobile: 1234567890,
    salary: 110000
  }
];
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
}

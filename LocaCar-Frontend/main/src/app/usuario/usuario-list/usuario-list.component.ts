import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';

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
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.sass']
})
export class UsuarioListComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'nome',
    'tipo',
    'email',
    'logradouro',
    'cidade',
    'cpf',
    'actions'
  ];
  dataSource2 = new MatTableDataSource<Usuario>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  loading: boolean = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.dataSource2.paginator = this.paginator;
    this.getUsuarios();
  }

  getUsuarios() {
    this.loading = true;
    this.usuarioService.getUsuarios()
        .subscribe((result) => {
          this.dataSource2 = new MatTableDataSource<Usuario>(result);
          this.loading = false;
        });
  }

  delete(id: number) {
    Swal.fire({
      title: 'Deseja remover esse usuário?',
      text: "Esse processo não será desfeito!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir usuário!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.loading = true;
        this.usuarioService.deleteUsuario(id)
        .subscribe((result) => {
          if(result['success']) {
            this.loading = false;
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Usuário excluído com sucesso!',
            }).finally(() => {
              this.getUsuarios();
            });
          } else {
            this.loading = false;
            Swal.fire({
              icon: 'error',
              title: 'Erro',
              text: 'Erro ao excluir usuário!',
            }).finally(() => {
              this.getUsuarios();
            });
          }
        });
      }
    })    
  }

}

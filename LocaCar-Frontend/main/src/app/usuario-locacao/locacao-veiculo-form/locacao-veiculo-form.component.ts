import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { Veiculo } from 'src/app/models/veiculo.model';
import { UsuarioService } from 'src/app/usuario/services/usuario.service';
import { VeiculoService } from 'src/app/veiculos/services/veiculo.service';
import { forkJoin } from 'rxjs';
import { Locacao } from 'src/app/models/locacao.model';
import { UsuarioLocacaoService } from '../services/usuario-locacao.service';
import Swal from 'sweetalert2';
import { StatusLocacaoEnum } from 'src/app/models/enums/status-locacao-enum';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
}; 
@Component({
  selector: 'app-locacao-veiculo-form',
  templateUrl: './locacao-veiculo-form.component.html',
  styleUrls: ['./locacao-veiculo-form.component.sass']
})

export class LocacaoVeiculoFormComponent implements OnInit {

  // Form 1
  register: FormGroup;
  hide = true;

  // Date Picker
  startDate = new Date(1990, 0, 1);
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  minDate: Date;
  maxDate: Date;

  loading: boolean = false;

  usuarios: Usuario[] = [];
  veiculos: Veiculo[] = [];
  
  constructor(private fb: FormBuilder,
              private dataAdapter: DateAdapter<any>,
              private usuarioService: UsuarioService,
              private route: Router,
              private veiculoService: VeiculoService,
              private usuarioLocacaoService: UsuarioLocacaoService,
    ) { 
      this.initForm();
      this.dataAdapter.setLocale('pt-br');
      
    }


  ngOnInit(): void {
    this.getDados();
  }

  getDados() {
    this.loading = true;
    forkJoin({
      usuarios: this.usuarioService.getUsuarios(),
      veiculos: this.veiculoService.getVeiculos(),
    }).subscribe((result) => {
      this.usuarios = result.usuarios;
      this.veiculos = result.veiculos;
      this.loading = false;
    });
  }


  changeUsuario(user: Usuario) {
    console.log(user);
  }


initForm() {
  this.register = this.fb.group({
    descricao: ['', [Validators.required]],
    dataLocacao: ['', [Validators.required]],
    dataDevolucao: ['', [Validators.required]],
    usuarioId: ['', [Validators.required]] ,
    veiculoId: ['', [Validators.required]] ,
    // logradouro: ['', [Validators.required]],
    // cidade: ['', [Validators.required]],
    // tipo: [false]
  });
}


  onRegister() {
    // console.log('Form Value', this.register.value);

    var locacao: Locacao = new Locacao();

    locacao.descricao = this.register.value['descricao'];
    locacao.dataDevolucao = this.register.value['dataDevolucao'];
    locacao.dataLocacao = this.register.value['dataLocacao'];
    locacao.usuarioId = this.register.value['usuarioId'].id;
    locacao.veiculoId = this.register.value['veiculoId'].id;
    locacao.status = StatusLocacaoEnum.pendente;

  
    this.loading = true;
    this.usuarioLocacaoService.save(locacao)
        .subscribe((result) => {
          if(result['success']) {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Locação salvo com sucesso!',
            })
          this.loading = false;
            // .finally(() => {
            //   this.route.navigateByUrl('/usuario');
            // });
          }
        });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/usuario.service';


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
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.sass'],
})


export class UsuarioCadastroComponent implements OnInit {
    // Form 1
    register: FormGroup;
    hide = true;


    // Date Picker
    startDate = new Date(1990, 0, 1);
    date = new FormControl(new Date());
    serializedDate = new FormControl(new Date().toISOString());
    minDate: Date;
    maxDate: Date;

  constructor(private fb: FormBuilder, 
              private dataAdapter: DateAdapter<any>,
              private usuarioService: UsuarioService,
              private route: Router) { 
    this.initForm();
    this.dataAdapter.setLocale('pt-br');
  }


  usuario: Usuario = new Usuario();
  

  ngOnInit(): void {
  }

  initForm() {
    this.register = this.fb.group({
      nome: ['', [Validators.required]],
      sobrenome: [''],
      cpf: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      logradouro: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      tipo: [false]
    });
  }

  onRegister() {
    // console.log('Form Value', this.register.value);

    this.usuario.nome = this.register.value['nome'] + ' ' + this.register.value['sobrenome'];
    this.usuario.cpf = this.register.value['cpf'];
    this.usuario.email = this.register.value['email'];
    this.usuario.logradouro = this.register.value['logradouro'];
    this.usuario.cidade = this.register.value['cidade'];
    this.usuario.tipo = this.register.value['tipo'] != true ? 0 : 1;
    this.usuario.senha = '123!@#';

    this.usuarioService.saveUsuario(this.usuario)
        .subscribe((result) => {
          console.log(result);
          if(result['success']) {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Usuário salvo com sucesso!',
            }).finally(() => {
              this.route.navigateByUrl('/usuario');
            });
          }
        });
  }

}

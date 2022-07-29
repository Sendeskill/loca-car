import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';


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

  constructor(private fb: FormBuilder, private dataAdapter: DateAdapter<any>) { 
    this.initForm();
    dataAdapter.setLocale('pt-br');
  }

  

  ngOnInit(): void {
  }

  initForm() {
    this.register = this.fb.group({
      nome: ['', [Validators.required]],
      sobrenome: [''],
      dataNascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)]
      ],
      telefone: ['', [Validators.required]],
      setor: ['', [Validators.required]],
      administrador: [false]
    });
  }

  onRegister() {
    console.log('Form Value', this.register.value);
  }

}

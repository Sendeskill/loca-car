import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';
import Swal from 'sweetalert2';
import { VeiculoService } from '../services/veiculo.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY'
  },
}; 

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.sass']
})
export class CadastroVeiculoComponent implements OnInit {
    // Form 1
    register: FormGroup;
    hide = true;


    // Date Picker
    startDate = new Date(1990, 0, 1);
    date = new FormControl(new Date());
    serializedDate = new FormControl(new Date().toISOString());
    minDate: Date;
    maxDate: Date;

    veiculo: Veiculo = new Veiculo();

    constructor(private fb: FormBuilder, 
                private dataAdapter: DateAdapter<any>,
                private veiculoService: VeiculoService,
                private route: Router) { 
      this.initForm();
      dataAdapter.setLocale('pt-br');
    }
  

  ngOnInit(): void {
  }

  initForm() {
    this.register = this.fb.group({
      modelo: ['', [Validators.required]],
      placa: ['', [Validators.required]],
      anoFabricacao: ['', [Validators.required]],
      anoModelo: ['', [Validators.required]],
      cor: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
      observacao: ['', [Validators.required]],
    });
  }

  onRegister() {
    this.veiculo.modelo = this.register.value['modelo'];
    this.veiculo.placa = this.register.value['placa'];
    this.veiculo.anoFabricacao = this.register.value['anoFabricacao'];
    this.veiculo.anoModelo = this.register.value['anoModelo'];
    this.veiculo.cor = this.register.value['cor'];
    this.veiculo.marca = this.register.value['marca'];
    this.veiculo.descricao = this.register.value['descricao'];
    this.veiculo.observacao = this.register.value['observacao'];
    this.veiculo.status = 1;

    this.veiculoService.saveVeiculo(this.veiculo)
        .subscribe((result) => {
          if(result['success']) {
            Swal.fire({
              icon: 'success',
              title: 'Sucesso',
              text: 'Veículo salvo com sucesso!',
            }).finally(() => {
              this.route.navigateByUrl('/veiculo/disponiveis');
            });
          }
        });
  }

}

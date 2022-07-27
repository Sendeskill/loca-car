import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos-disponiveis',
  templateUrl: './veiculos-disponiveis.component.html',
  styleUrls: ['./veiculos-disponiveis.component.sass']
})
export class VeiculosDisponiveisComponent implements OnInit {

  ultimosDisponiveis: any[] = [
    { cor: 'Preto', placa: 'EOZ-2332', veiculo: 'Onix LTZ' },
    { cor: 'Branco', placa: 'EOZ-2332', veiculo: 'Onix LTZ' },
    { cor: 'Vermelho', placa: 'EOZ-2332', veiculo: 'Onix LTZ' },
    { cor: 'Azul', placa: 'EOZ-2332', veiculo: 'Onix LTZ' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

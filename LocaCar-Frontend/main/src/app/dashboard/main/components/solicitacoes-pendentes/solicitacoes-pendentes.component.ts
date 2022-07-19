import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacoes-pendentes',
  templateUrl: './solicitacoes-pendentes.component.html',
  styleUrls: ['./solicitacoes-pendentes.component.sass']
})
export class SolicitacoesPendentesComponent implements OnInit {

  constructor() { }

  solicitacoesPendentes: any[] = [
    { data: new Date(), solicitante: 'Marcio Ferraz', veiculo: 'Onix LTZ' },
    { data: new Date(), solicitante: 'Marcio Ferraz', veiculo: 'Onix LTZ' },
    { data: new Date(), solicitante: 'Marcio Ferraz', veiculo: 'Onix LTZ' },
    { data: new Date(), solicitante: 'Marcio Ferraz', veiculo: 'Onix LTZ' },
  ];

  ngOnInit(): void {
  }

}

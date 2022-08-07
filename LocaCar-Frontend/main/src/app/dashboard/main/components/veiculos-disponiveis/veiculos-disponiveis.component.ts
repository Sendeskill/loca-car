import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { Usuario } from 'src/app/models/usuario.model';

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

  constructor(
    private authService: AuthService
  ) { }

  usuarioLogado: Usuario;
  ngOnInit(): void {
    this.usuarioLogado = this.authService.currentUserValue;
  }

}

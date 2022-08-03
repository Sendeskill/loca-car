import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Locacao } from 'src/app/models/locacao.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class UsuarioLocacaoService {
    constructor(private httpClient: HttpClient) { }

    getLocacoes() {
        return this.httpClient.get<Locacao[]>(`${environment.apiLocacao}/api/Locacao`);
    }

    save(locacao: Locacao) {
        return this.httpClient.post(`${environment.apiLocacao}/api/Locacao`,locacao );
    }
    
}
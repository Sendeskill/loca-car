import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Veiculo } from 'src/app/models/veiculo.model';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class VeiculoService {
    constructor(private httpClient: HttpClient) { }
    

    getVeiculos() {
        return this.httpClient.get<Veiculo[]>(`${environment.apiVeiculo}/api/Veiculo`);
    }
    
    getVeiculo(id: number) {
        return this.httpClient.get<Veiculo>(`${environment.apiVeiculo}/api/Veiculo/${id}`);
    }

    saveVeiculo(veiculo: Veiculo) {
        return this.httpClient.post(`${environment.apiVeiculo}/api/Veiculo`, veiculo);
    }

    delete(id: number) {
        return this.httpClient.delete(`${environment.apiVeiculo}/api/Veiculo/${id}`);
    }
}
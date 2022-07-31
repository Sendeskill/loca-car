import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({providedIn: 'root'})
export class UsuarioService {
    constructor(private httpClient: HttpClient) { }

    public getUsuarios() {
        return this.httpClient.get<Usuario[]>(`${environment.apiUsuario}/api/Usuario`);
    }

    public getUsuario(id: number) {
        return this.httpClient.get<Usuario[]>(`${environment.apiUsuario}/api/Usuario/${id}`);
    }
    
    public saveUsuario(usuario: Usuario) {
        return this.httpClient.post(`${environment.apiUsuario}/api/Usuario`, usuario);
    }

    public deleteUsuario(id: number) {
        return this.httpClient.delete(`${environment.apiUsuario}/api/Usuario/${id}`);
    }
}
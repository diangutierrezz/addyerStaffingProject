import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Usuario } from 'src/app/models/usuario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfilecolabService {

  private api='http://localhost:8080/api';

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'}) 
  }

  dato = JSON.parse(localStorage.getItem("usuario")).id;
  constructor(private http: HttpClient) { }

  modificarContraseña(usuario:Usuario){
    const url = '/modificarClave/'
    return this.http.put<Usuario>(this.api+url+this.dato,usuario)
  }

  agregarHabilidades(habilidad:string){
    const url = '/agregarUsuarioHabilidades';
    let apiURL = `${url}/${this.dato}/${habilidad}`;
    return this.http.post(this.api+apiURL, this.httpOptions)

}
}

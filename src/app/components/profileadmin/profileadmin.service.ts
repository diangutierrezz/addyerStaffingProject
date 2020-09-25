import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Usuario } from 'src/app/models/usuario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileadminService {

  private api='http://localhost:8080/api';
  dato = JSON.parse(localStorage.getItem("usuario")).id;

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'}) 
  }

  constructor(private http: HttpClient) { }

  retornar(dato) {
    console.log(dato)
    return this.http.get("http://localhost:8080/api/usuario/" + dato);
    
  } 
  
  modificarContraseña(usuario: Usuario) {
    const url = 'http://localhost:8080/api/modificarClave/'
    return this.http.put<Usuario>(url + this.dato, usuario)
  }
}
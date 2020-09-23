import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Usuario } from 'src/app/models/usuario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddSkillService {

  constructor(private http: HttpClient) { }

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'}) 
  }

  api = "http://localhost:8080/api/";
  

  crearUsuarioHabilidades(rut: string, habilidad:string){
    const url = 'crearUsuarioHabilidades';
    let apiURL = `${url}/${rut}/${habilidad}`;
    return this.http.post(this.api+apiURL, this.httpOptions)
  }
}

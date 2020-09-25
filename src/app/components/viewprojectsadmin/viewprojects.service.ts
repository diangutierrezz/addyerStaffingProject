import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ViewprojectsService {

  constructor(private http: HttpClient) { }  

  
    retornar() {
     
      return this.http.get("http://localhost:8080/api/obtenerProyectos");
      
    }     
    
}

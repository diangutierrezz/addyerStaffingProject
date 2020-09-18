import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ViewprojectcolabService {

  constructor(private http: HttpClient) { }  

  
    retornar(dato) {
      console.log(dato)
      return this.http.get("http://localhost:8080/api/proyectos/colab/" + dato);
      
    }     
    
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewprojectcolabService {

  constructor(private http: HttpClient) { }  

    retornar() {
      return this.http.get("http://localhost:8080/api/api/proyectos");
    }     
}

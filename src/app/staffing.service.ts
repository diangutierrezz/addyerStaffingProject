import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario  } from "src/app/models/usuario";

@Injectable({
  providedIn: 'root'
})
export class StaffingService {

  constructor(private http: HttpClient) { }

  api = "http://localhost:8080/api/";

  logincolab(usuario: Usuario): Observable<Usuario> {
    const url = 'logincolab'
    return this.http.post<Usuario>(this.api + url, usuario);
  }
  loginAdmin(usuario: Usuario): Observable<Usuario> {
    const url = 'loginAdmin'
    return this.http.post<Usuario>(this.api + url, usuario);
  }

}
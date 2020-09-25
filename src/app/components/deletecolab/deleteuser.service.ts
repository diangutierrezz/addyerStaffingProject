import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DeleteuserService {

  constructor(private http: HttpClient) { }

  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'}) 
  }

  api = "http://localhost:8080/api/";
}

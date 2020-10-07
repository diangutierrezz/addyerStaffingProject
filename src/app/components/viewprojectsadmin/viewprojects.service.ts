import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from'@angular/common/http';
import { Usuario } from 'src/app/models/usuario';
import { from, Observable } from 'rxjs';
import { ColabProyecto } from "src/app/models/ColabProyecto";
import { Habilidades } from "src/app/models/habilidades";
import { Proyecto } from "src/app/models/Proyecto";

@Injectable({
  providedIn: 'root'
})
export class ViewprojectsService {

  constructor(private http: HttpClient) { }  

  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
    retornar() {
     
      return this.http.get("http://localhost:8080/api/obtenerProyectos");
      
    }     

    ObtenerProyectoHabilidades(id:number){
      return this.http.get<Habilidades[]>("http://localhost:8080/api/habilidadesPorProyecto/" + id)

    }
    
    obtenerColabProyectos(id: number): Observable<ColabProyecto[]>{
      const url = 'http://localhost:8080/api/usuariosPorProyecto';
      let apiURL = `${url}/${id}/`;
      return this.http.get<ColabProyecto[]>(apiURL);
    }

    agregarUsuarioProyecto(id_usuario: number, id_proyecto: number){
      const url = 'http://localhost:8080/api/agregarUsuarioProyecto';
      let apiURL = `${url}/${id_usuario}/${id_proyecto}/`
      return this.http.post(apiURL,this.httpOptions)
    }

    EliminarUsuarioProyecto(id_proyecto: number, id_usuario:number){
      const url = 'http://localhost:8080/api/borrarUsuarioProyecto';
      let apiURL = `${url}/${id_proyecto}/${id_usuario}/`
      return this.http.delete(apiURL,this.httpOptions)
    }

    obtenerHabilidades(): Observable<Habilidades[]>{
      const url = 'http://localhost:8080/api/obtenerHabilidades'
      return this.http.get<Habilidades[]>(url);
    }

    agregarHabilidadProyecto(id_proyecto: number, habilidad:string){
      const url = 'http://localhost:8080/api/agregarProyectoHabilidades'
      let apiURL = `${url}/${id_proyecto}/${habilidad}/`
      return this.http.post(apiURL,this.httpOptions)

    }

    borrarHabilidadProyecto(id_proyecto: number, id_habilidad:number){
      const url = 'http://localhost:8080/api/borrarProyectoHabilidades'
      let apiURL = `${url}/${id_proyecto}/${id_habilidad}/`
      return this.http.delete(apiURL,this.httpOptions)
    }

    modificarP(cambios: Proyecto, id:number): Observable<Proyecto> {
      const url = 'http://localhost:8080/api/modificarProyecto'
      let apiURL = `${url}/${id}/`;
      return this.http.put<Proyecto>(apiURL, cambios, this.httpOptions);
    }

    ObtenerProyectoPorId(id:number){
      const url = 'http://localhost:8080/api/proyectoPorProyecto'
      let apiURL = `${url}/${id}/`;
      return this.http.get(apiURL, this.httpOptions)
    }
}

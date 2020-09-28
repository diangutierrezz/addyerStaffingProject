import { Component, OnInit } from '@angular/core';
import { ViewprojectsService } from "../viewprojectsadmin/viewprojects.service";
import { UsuarioHabilidad } from "src/app/models/UsuarioHabilidad";
import { StaffingService } from "src/app/staffing.service";
import { Habilidades } from "src/app/models/habilidades";
import { Proyecto } from "src/app/models/Proyecto";

@Component({
  selector: 'app-viewprojectsadmin',
  templateUrl: './viewprojectsadmin.component.html',
  styleUrls: ['./viewprojectsadmin.component.css']
})
export class ViewprojectsadminComponent implements OnInit {

  opened = false;
  colabProyecto=null;
  hab: Habilidades[] = [];
  columnasH: String[] = ['habilidad', 'botondeEliminar'];
  columnas: String[] = ['nombre','apellido', 'cargo','botonEliminar'];
  habilidades: Habilidades [] = [];
  habilidadSeleccionada;
  proyectos=null;
    indexproyecto: number = null;
    estadoBoton: boolean[] = [];
    idProyecto;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  filterPost = '';
  usuarioHabilidad: UsuarioHabilidad [] = [];

 
  constructor(private service: ViewprojectsService, private StaffingService:StaffingService) { }

  ngOnInit(): void {
    this.service.retornar().subscribe( result =>  {this.proyectos = result}); 

  }

  cerrarsesion(){
    localStorage.removeItem("usuario");
  }

  index: number = null;
guardarIndex(i: number){
this.index = i;
console.log(this.index, "posicion tabla")
console.log(this.indexproyecto, "Numero de proyecto")
console.log(this.usuarioHabilidad[this.index].id_usuario, "Id usuario")
this.service.agregarUsuarioProyecto(this.usuarioHabilidad[this.index].id_usuario,this.indexproyecto).subscribe();
this.estadoBoton[i]=true;
this.index=null;
}


  habilidadesProyecto(id: number){
    this.service.ObtenerUsuarioHabilidades(id).subscribe (result => this.hab = result)
    console.log(this.hab)
    console.log(id)
  }

  mostrarColab(id: number){
    this.service.obtenerColabProyectos(id)
    .subscribe(colabProyecto => this.colabProyecto=colabProyecto);
    console.log(this.colabProyecto)
  }

  agregarUsuarioProyecto(id_usuario:number, id_proyecto:number){
    this.service.agregarUsuarioProyecto(id_usuario,id_proyecto).subscribe()
    alert('Se Agrego el usuario al proyecto Correctamente')
  }

  borrarUsuarioProyecto(id:number, id_usuario:number){
      this.service.EliminarUsuarioProyecto(id,id_usuario).subscribe ()
      alert("Se Elimino el usuario de este proyecto")
  }


  AgregarUsuario(id: number){
    this.indexproyecto = id;
    console.log(this.indexproyecto)
    this.StaffingService.obtenerUsuariosxHabilidad().subscribe(usuarioHabilidad => {this.usuarioHabilidad=usuarioHabilidad;
       for (let index = 0; index < usuarioHabilidad.length; index++) {
        
         this.estadoBoton.push(false)
       }
      }
      );
  }

  obtenerHabilidades(id:number){
    this.indexproyecto = id;
    this.service.obtenerHabilidades()
    .subscribe(habilidades => this.habilidades=habilidades);
  }

  
  agregarProyectoHabilidades(){
    console.log(this.habilidadSeleccionada)
    this.service.agregarHabilidadProyecto(this.indexproyecto,this.habilidadSeleccionada).subscribe()
    alert(this.habilidadSeleccionada)
    this.indexproyecto=null;

  }

  borrarHabilidadProyecto(idproyecto:number,id_habilidad: number){
    console.log(idproyecto);
    console.log(id_habilidad)
    this.service.borrarHabilidadProyecto(idproyecto,id_habilidad).subscribe()
  }

    cambios: Proyecto = {nombreproyecto: "",descripcion: "", fechainicio: "", fechafinal: ""}

  modificarProyecto(){
   this.service.modificarP(this.idProyecto, this.cambios).subscribe();
   console.log(this.idProyecto)
   console.log(this.cambios)

  }

  guardarIdproyecto(numProyecto){
    this.idProyecto = numProyecto
    console.log(this.idProyecto)
  }

}

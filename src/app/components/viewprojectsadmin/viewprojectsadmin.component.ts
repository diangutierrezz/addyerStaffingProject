import { Component, OnInit } from '@angular/core';
import { ViewprojectsService } from "../viewprojectsadmin/viewprojects.service";
import { UsuarioHabilidad } from "src/app/models/UsuarioHabilidad";
import { StaffingService } from "src/app/staffing.service";
import { Habilidades } from "src/app/models/habilidades";
import { Proyecto } from "src/app/models/Proyecto";
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

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
  filterPost = '';
  usuarioHabilidad: UsuarioHabilidad [] = [];

   toggleSidebar(){
    this.opened = !this.opened;
  }

  constructor(private service: ViewprojectsService, private StaffingService:StaffingService) { }

  ngOnInit(): void {
    this.service.retornar().subscribe( result =>  {this.proyectos = result}); 
  }

  cerrarsesion(){
    localStorage.removeItem("usuario");
  }

  //Agregar y borrar Colaboradores al proyecto

  mostrarColab(id: number){
    this.service.obtenerColabProyectos(id)
    .subscribe(colabProyecto => this.colabProyecto=colabProyecto);
    console.log(this.colabProyecto)
  }

  AgregarUsuario(id: number){
    this.indexproyecto = id;
    console.log(this.indexproyecto)
    this.StaffingService.obtenerUsuariosxHabilidad().subscribe(usuarioHabilidad => {this.usuarioHabilidad=usuarioHabilidad;
      this.estadoBoton = []; 
      for (let index = 0; index < usuarioHabilidad.length; index++) {
         this.estadoBoton.push(false)  
       }   
      });
  }

  index: number = null;
guardarNuevoUsuarioProyecto(i: number){
this.index = i;
console.log(this.indexproyecto, "Numero de proyecto")
console.log(this.usuarioHabilidad[this.index].id_usuario, "Id usuario")
this.service.agregarUsuarioProyecto(this.usuarioHabilidad[this.index].id_usuario,this.indexproyecto).subscribe();
this.estadoBoton[i]=true;
this.mostrarColab(this.indexproyecto);

}


finalizar(){

}

  borrarUsuarioProyecto(P,id:number, id_usuario:number){
    this.indexproyecto = id;
    console.log(id,"proyecto")
    console.log(id_usuario,"idusuario")
      this.service.EliminarUsuarioProyecto(this.indexproyecto,id_usuario).subscribe ()
      this.colabProyecto = this.colabProyecto.filter(
        (c) => c.id_usuario != this.colabProyecto[P].id_usuario
      );
  }

// Agregar y borrar Habilidades Proyecto


  habilidadesProyecto(id: number){
    this.service.ObtenerProyectoHabilidades(id).subscribe (result => this.hab = result)
    console.log(this.hab)
    console.log(id, "proyecto ID")
  }


  borrarHabilidadProyecto(i, idproyecto:number,id_habilidad: number){
    this.indexproyecto = idproyecto;
  console.log(idproyecto, "id proyecto");
  console.log(id_habilidad, "id habilidad")
  console.log(i, "posicion tabla")
  this.service.borrarHabilidadProyecto(this.indexproyecto,id_habilidad).subscribe()
  this.hab = this.hab.filter(
    (c) => c.habilidad != this.hab[i].habilidad
  );
this.indexproyecto = null;
}




  obtenerHabilidades(id:number){
    this.indexproyecto = id;
    this.service.obtenerHabilidades()
    .subscribe(habilidades => this.habilidades=habilidades);

  }

  
  agregarProyectoHabilidades(){
    console.log(this.habilidadSeleccionada)
    this.service.agregarHabilidadProyecto(this.indexproyecto,this.habilidadSeleccionada).subscribe()
    alert("Habilidad Agregada Correctamente")
  
    this.habilidadesProyecto(this.indexproyecto);
    this.indexproyecto=null;

  }

  // Modificar Proyecto

    cambios: Proyecto = {nombreproyecto: "",descripcion: "", fechainicio: "", fechafinal: ""}

  modificarProyecto(){
   this.service.modificarP(this.idProyecto, this.cambios).subscribe();
   console.log(this.idProyecto)
   console.log(this.cambios)
   window.location.reload();

  }

  guardarIdproyecto(numProyecto){
    this.idProyecto = numProyecto
    console.log(this.idProyecto)
  }



}

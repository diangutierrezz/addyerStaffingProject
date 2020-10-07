import { Component, OnInit, Inject  } from '@angular/core';
import { ViewprojectsService } from "../viewprojectsadmin/viewprojects.service";
import { UsuarioHabilidad } from "src/app/models/UsuarioHabilidad";
import { StaffingService } from "src/app/staffing.service";
import { Habilidades } from "src/app/models/habilidades";
import { Proyecto } from "src/app/models/Proyecto";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-viewprojectsadmin',
  templateUrl: './viewprojectsadmin.component.html',
  styleUrls: ['./viewprojectsadmin.component.css']
})
export class ViewprojectsadminComponent implements OnInit {

  opened = false;
  colabProyecto = null;
  hab: Habilidades[] = [];
  columnasH: String[] = ['habilidad', 'botondeEliminar'];
  columnas: String[] = ['nombre', 'apellido', 'cargo', 'botonEliminar'];
  habilidades: Habilidades[] = [];
  habilidadSeleccionada;
  proyectos = null;
  indexproyecto: number = null;
  estadoBoton: boolean[] = [];
  idProyecto;
  filterPost = '';
  usuarioHabilidad: UsuarioHabilidad[] = [];
  show: boolean;
  VM: string = "ver más"


  // boton ver mas y ver menos
  mostrarInfo(){
    if(this.show = !this.show){
      this.VM = 'Ver Menos'
    } else
      this.VM = 'Ver mas'
    
  }

 
//abrir sidebar
  toggleSidebar() {
    this.opened = !this.opened;
  }

  constructor(
    private service: ViewprojectsService,
     private StaffingService: StaffingService, 
    @Inject(DOCUMENT) document
    ) 
    { this.show = false; }

  ngOnInit(): void {
    this.service.retornar().subscribe(result => { this.proyectos = result });
  }

  //cerrar seesion
  cerrarsesion() {
    localStorage.removeItem("usuario");
  }

  
  //obtener colaboradores de cada proyecto
  mostrarColab(id: number) {
    this.service.obtenerColabProyectos(id)
      .subscribe(colabProyecto => this.colabProyecto = colabProyecto);
    console.log(this.colabProyecto)
  }

  //Tabla con listado de usuarios para agregar a un proyecto
  AgregarUsuario(id: number) {
    this.indexproyecto = id;
    console.log(this.indexproyecto)
    this.StaffingService.obtenerUsuariosxHabilidad().subscribe(usuarioHabilidad => {
      this.usuarioHabilidad = usuarioHabilidad;
      this.estadoBoton = [];
      for (let index = 0; index < usuarioHabilidad.length; index++) {
        this.estadoBoton.push(false)
      }
    });
  }

  // Guardar nuevo usuario al proyecto
  index: number = null;
  guardarNuevoUsuarioProyecto(i: number) {
    this.index = i;
    console.log(this.indexproyecto, "Numero de proyecto")
    console.log(this.usuarioHabilidad[this.index].id_usuario, "Id usuario")
    this.service.agregarUsuarioProyecto(this.usuarioHabilidad[this.index].id_usuario, this.indexproyecto).subscribe();
    this.estadoBoton[i] = true;
    this.mostrarColab(this.indexproyecto);

  }

//cerrar ventana
  finalizar() {

  }

  //Borrar usuario de proyecto
  borrarUsuarioProyecto(P, id: number, id_usuario: number) {
    this.indexproyecto = id;
    console.log(id, "proyecto")
    console.log(id_usuario, "idusuario")
    this.service.EliminarUsuarioProyecto(this.indexproyecto, id_usuario).subscribe()
    this.colabProyecto = this.colabProyecto.filter(
      (c) => c.id_usuario != this.colabProyecto[P].id_usuario
    );
  }

//Obtener las habilidades de un proyecto
  habilidadesProyecto(id: number) {
    this.service.ObtenerProyectoHabilidades(id).subscribe(result => this.hab = result)
    console.log(this.hab)
    console.log(id, "proyecto ID")
  }

//borrar habilidades de un proyecto
  borrarHabilidadProyecto(i, idproyecto: number, id_habilidad: number) {
    this.indexproyecto = idproyecto;
    console.log(idproyecto, "id proyecto");
    console.log(id_habilidad, "id habilidad")
    console.log(i, "posicion tabla")
    this.service.borrarHabilidadProyecto(this.indexproyecto, id_habilidad).subscribe()
    this.hab = this.hab.filter(
      (c) => c.habilidad != this.hab[i].habilidad
    );
    this.indexproyecto = null;
  }



//obtener select de habilidades para agregar una nueva
  obtenerHabilidades(id: number) {
    this.indexproyecto = id;
    this.service.obtenerHabilidades()
      .subscribe(habilidades => this.habilidades = habilidades);

  }

//agregar nueva habilidad al proyecto
  agregarProyectoHabilidades() {
    console.log(this.habilidadSeleccionada)
    this.service.agregarHabilidadProyecto(this.indexproyecto, this.habilidadSeleccionada).subscribe()
    alert("Habilidad Agregada Correctamente")

    this.habilidadesProyecto(this.indexproyecto);
    this.indexproyecto = null;

  }

  // obtener info del proyecto para editar
  infoproyecto;
  obtenerProyectoPorId(id: number) {
    console.log(id, "ID DEL PROYECTO")
    this.service.ObtenerProyectoPorId(id).subscribe(     (result) => { 
      this.infoproyecto = result;
    },
    (error) => console.log('NO saveJsonArchive'));
    console.log(this.infoproyecto)

  }

//modificar proyecto
  modificarProyecto(proyecto: Proyecto, idproyecto: number) {
    this.service.modificarP( proyecto, idproyecto).subscribe();
    console.log()
    console.log(proyecto)
    alert('Cambios Guardados')
  }



  

}

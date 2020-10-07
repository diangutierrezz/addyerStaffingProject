import { Component, OnInit, Input} from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ViewcolabsService } from '../viewcolabs/viewcolabs.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-viewcolabs',
  templateUrl: './viewcolabs.component.html',
  styleUrls: ['./viewcolabs.component.css'],
})
export class ViewcolabsComponent implements OnInit {

  usuario: Usuario [] = [];
  columnasAMostrar: String[] = ['rol', 'nombre', 'apellido', 'rut', 'correo', 'cargo', 'botonModificar', 'botonEliminar'];
  opened = false;
  @Input() data: string[];

  constructor(
    private viewcolabsService: ViewcolabsService,
      public dialog: MatDialog,
      private router: Router)
       { }

      
  ngOnInit(): void {
this.actualizarTabla();
  }

  //Salir de la sesion
  cerrarsesion(){
    localStorage.removeItem("usuario");
  }

  //abrir sidebar
  toggleSidebar(){
    this.opened = !this.opened;
  }

  cargo: string[] = [
    "Ayudante",
    "Coordinador",
    "Facilitador",
    "Mentor",
    "Profesor",
    "Tutor",
  ]

  rol: string[] = [
    "Colaborador",
    "Administrador"
  ]

  //tabla con colaboradores
  actualizarTabla(){
    this.viewcolabsService.obtenerUsuarios()
    .subscribe(usuario => this.usuario=usuario);
  }

//guardar usuario segun su posicion en la tabla
  index: number = null;
guardarIndex(i: number){
this.index = i;
console.log(this.index)
console.log(this.usuario[this.index].id)
}

//borrar usuario
borrarUsuario(){
  this.viewcolabsService.borrarUsuario(this.usuario[this.index].id).subscribe ();
  this.usuario = this.usuario.filter(
    (c) => c.rut != this.usuario[this.index].rut
  );
this.index = null;
}



modificar(ro:string,nombre:string,apellido:string,carg:string){
  this.viewcolabsService.modificarUsuario(this.usuario[this.index].id, ro,nombre,apellido,carg).subscribe(_=>alert('Usuario actualizado'));
  this.index = null
  window.location.reload();
}


}



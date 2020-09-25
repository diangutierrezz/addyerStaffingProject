import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ViewcolabsService } from '../viewcolabs/viewcolabs.service';
import { UpdatecolabComponent } from '../updatecolab/updatecolab.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DeletecolabComponent } from "../deletecolab/deletecolab.component";

@Component({
  selector: 'app-viewcolabs',
  templateUrl: './viewcolabs.component.html',
  styleUrls: ['./viewcolabs.component.css']
})
export class ViewcolabsComponent implements OnInit {

  usuario: Usuario [] = [];
  columnasAMostrar: String[] = ['nombre', 'apellido', 'rut', 'correo', 'cargo', 'botonModificar', 'botonEliminar'];
  opened = false;

  constructor(private viewcolabsService: ViewcolabsService,  public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.viewcolabsService.obtenerUsuarios()
    .subscribe(usuario => this.usuario=usuario);
  }

  cerrarsesion(){
    localStorage.removeItem("usuario");
  }

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

  openDialog() {
    const dialogRef = this.dialog.open(UpdatecolabComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDelete(){
    const dialogRef = this.dialog.open(DeletecolabComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  index: number = null;
guardarIndex(i: number){
this.index = i;
console.log(this.index)
console.log(this.usuario[this.index].id)
}

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
}


}



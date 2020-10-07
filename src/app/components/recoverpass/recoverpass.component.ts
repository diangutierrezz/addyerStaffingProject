import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StaffingService } from 'src/app/staffing.service';
import { Usuario } from 'src/app/models/usuario';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recoverpass',
  templateUrl: './recoverpass.component.html',
  styleUrls: ['./recoverpass.component.css']
})
export class RecoverpassComponent implements OnInit {

  constructor(private ubicacion: Location, private service: StaffingService, private router: Router) { }
  usuario: Usuario;

  ngOnInit(): void {
  }

  // remover info del usuario
  cerrarsesion(){
    localStorage.removeItem("usuario");
  }

  //servicio para recuperar clave
  recuperar(correo: string){
    this.service.recuperarContrasena(correo)
      .subscribe(correo =>
        { if(correo[0] == "usuario Existe"){
          alert('Se ha enviado la contraseña a su correo')
        } if (correo[0] == "Usuario no existe" )
          alert('Correo no existe en la Base de datos')});
      
  }



}
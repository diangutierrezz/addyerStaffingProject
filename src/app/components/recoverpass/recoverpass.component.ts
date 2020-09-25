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

  
  cerrarsesion(){
    localStorage.removeItem("usuario");
  }

  recuperar(correo: string){
    this.service.recuperarContrasena(correo)
      .subscribe(correo => alert('Se ha enviado la contraseña a su correo'));
      
  }

}
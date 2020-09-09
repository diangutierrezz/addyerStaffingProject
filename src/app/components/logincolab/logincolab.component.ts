import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";

@Component({
  selector: 'app-login',
  templateUrl: './logincolab.component.html',
  styleUrls: ['./logincolab.component.css']
})
export class LogincolabComponent implements OnInit {

  usuario: Usuario;
  mensaje;
  usser;
  pass;
  constructor(private router: Router, private service: StaffingService) {
  
  }
  

  ngOnInit(): void {
  }

  logincolab(correo: String, contraseña: String) {

    /* ningun campo vacío */
    if (!correo.trim()) {
      alert("Campo correo vacio");
    }
    else if (!contraseña.trim()) {
      alert("Campo contraseña vacio");
    }

    /* 
        verificación de logueo */
    else {
      let usuarioDatos = JSON.parse(localStorage.getItem("usuario"));
      this.service.logincolab({ correo, contraseña } as Usuario).subscribe(_ => { alert("Logueo exitoso"); this.router.navigate(['homecolab']) }, error => { alert("Los datos no coinciden") })
    }
  }
}

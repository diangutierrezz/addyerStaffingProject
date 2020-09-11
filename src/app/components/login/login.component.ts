import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  constructor(private router: Router, private service: StaffingService) {
  
  }
  

  ngOnInit(): void {
  }

  loginAdmin(correo: String, contraseña: String) {

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
      this.service.loginAdmin({ correo, contraseña } as Usuario).subscribe(_ => { this.router.navigate(['homeadmin']) }, error => { alert("Los datos no coinciden") })
    }

  }
}


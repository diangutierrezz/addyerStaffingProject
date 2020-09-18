import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { RecoverpassComponent } from '../recoverpass/recoverpass.component';

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
  constructor(private router: Router, private service: StaffingService,public dialog: MatDialog) {
  
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
      
      this.service.logincolab({ correo, contraseña } as Usuario).subscribe(userResponse => { localStorage.setItem("usuario",JSON.stringify(userResponse));
      this.router.navigate(['homecolab'])
    });
    }   
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(RecoverpassComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}


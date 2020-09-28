import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RecoverpassComponent } from '../recoverpass/recoverpass.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;
  firstFormGroup: FormGroup;
  constructor(private router: Router, private service: StaffingService, public dialog: MatDialog, private _formBuilder: FormBuilder) {
  }
  

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      pass: [null,[ Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      user: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])),

    });
    
  }

  get f(){
    return this.firstFormGroup.controls;
  }

  loginAdmin(correo: String, contrasena: String) {

    /* ningun campo vacío */
    if (!correo.trim()) {
      alert("Campo correo vacio");
    }
    else if (!contrasena.trim()) {
      alert("Campo contraseña vacio");
    }

    /* 
        verificación de logueo */
    else {
      let usuarioDatos = JSON.parse(localStorage.getItem("usuario"));
        this.service.loginAdmin({ correo, contrasena } as Usuario).subscribe(
        userResponse => {
          if (userResponse [0] == "Usuario no existe"){
            alert ("Usuario no se encuentra registrado en la base de datos")
          } else {
              localStorage.setItem("usuario",JSON.stringify( userResponse [0] ));
              this.router.navigate(['homeadmin']) 
            }},
        error => { alert("Los datos no coinciden o no tiene permisos")
       })
      }

  }

  openDialog() {
    const dialogRef = this.dialog.open(RecoverpassComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
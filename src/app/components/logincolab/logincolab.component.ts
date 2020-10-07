import { Component, OnInit,Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RecoverpassComponent } from '../recoverpass/recoverpass.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './logincolab.component.html',
  styleUrls: ['./logincolab.component.css']
})
export class LogincolabComponent implements OnInit {

  usuario: Usuario;
  firstFormGroup: FormGroup;
  mensaje;
  usser;
  pass;
  show: boolean;
  constructor(@Inject(DOCUMENT) document,private router: Router, private service: StaffingService,public dialog: MatDialog, private _formBuilder: FormBuilder) {
    this.show = false;
  }
  
  togglePassword(){
    this.show = !this.show;
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

  logincolab(correo: String, contrasena: String) {

    // ningun campo vacío 
    if (!correo.trim()) {
      alert("Campo correo vacio");
    }
    else if (!contrasena.trim()) {
      alert("Campo contraseña vacio");
    }

    //validar login
    else {
      
      let usuarioDatos = JSON.parse(localStorage.getItem("usuario"));
        this.service.logincolab({ correo, contrasena } as Usuario).subscribe(
        userResponse => {
          if (userResponse [0] == "Usuario no existe"){
            alert ("Usuario no se encuentra registrado en la base de datos")
          } else {
              localStorage.setItem("usuario",JSON.stringify( userResponse [0] ));
              this.router.navigate(['homecolab']) 
            }},
        error => { alert("Los datos no coinciden o no tiene permisos")
       })
      }
  }
  
  //Abrir campo recuperar clave
  openDialog() {
    const dialogRef = this.dialog.open(RecoverpassComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}
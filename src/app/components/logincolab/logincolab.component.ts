import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RecoverpassComponent } from '../recoverpass/recoverpass.component';

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
  constructor(private router: Router, private service: StaffingService,public dialog: MatDialog, private _formBuilder: FormBuilder) {
  
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
      
      this.service.logincolab({ correo, contrasena } as Usuario).subscribe(userResponse => { localStorage.setItem("usuario",JSON.stringify(userResponse));
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
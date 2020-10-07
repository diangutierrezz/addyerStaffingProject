import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario'
import { ProfileadminService } from 'src/app/components/profileadmin/profileadmin.service'

import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-profileadmin',
  templateUrl: './profileadmin.component.html',
  styleUrls: ['./profileadmin.component.css']
})
export class ProfileadminComponent implements OnInit {
//variables
  dato;
  contrasena: String ="";
  usuarios=null;
  opened = false;
  firstFormGroup: FormGroup;
  show: boolean;
  usuario: Usuario [] = [];
  @Input()usuarioo: Usuario 

  constructor(
    @Inject(DOCUMENT)document, 
    private service:ProfileadminService,
     private _formBuilder: FormBuilder) {
    this.show = false;
   }


//validaciones campo clave y guardar ID usuario
  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    console.log(this.dato);
    this.service.retornar(this.dato).subscribe( result =>  {this.usuarios = result});
    this.firstFormGroup = this._formBuilder.group({
      contrasena: [null,[ Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });
  }

  //ver clave
  togglePassword(){
    this.show = !this.show;
  }

  //abrir sidebar
  toggleSidebar(){
    this.opened = !this.opened;
  }

  //Validaciones form (mensajes de error)
  get f(){
    return this.firstFormGroup.controls;
  }

  //Servicio cambio de clave
  CambioClave(contrasena: String) {
    this.service.modificarContraseña({ contrasena } as Usuario).subscribe(usuario => {
      this.usuario.toString()
      alert("La contraseña se modifico correctamente")
    });
  }

  


}
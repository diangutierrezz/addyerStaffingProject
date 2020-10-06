import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Usuario } from 'src/app/models/Usuario'
import { ProfileadminService } from 'src/app/components/profileadmin/profileadmin.service'
import { from, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common'; 
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-profileadmin',
  templateUrl: './profileadmin.component.html',
  styleUrls: ['./profileadmin.component.css']
})
export class ProfileadminComponent implements OnInit {

  dato;
  contrasena: String ="";
  usuarios=null;
  opened = false;
  firstFormGroup: FormGroup;
  show: boolean;

  constructor(@Inject(DOCUMENT)document, private service:ProfileadminService, private _formBuilder: FormBuilder) {
    this.show = false;
   }

  usuario: Usuario [] = [];

  @Input()usuarioo: Usuario 

  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    console.log(this.dato);
    this.service.retornar(this.dato).subscribe( result =>  {this.usuarios = result});
    this.firstFormGroup = this._formBuilder.group({
      contrasena: [null,[ Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });
  }
  togglePassword(){
    this.show = !this.show;
  }

  toggleSidebar(){
    this.opened = !this.opened;
  }

  get f(){
    return this.firstFormGroup.controls;
  }

  CambioClave(contrasena: String) {
    this.service.modificarContraseña({ contrasena } as Usuario).subscribe(usuario => {
      this.usuario.toString()
      alert("La contraseña se modifico correctamente")
    });
  }

  


}
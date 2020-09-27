import { Component, Inject, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ProfilecolabService } from 'src/app/components/profilecolab/profilecolab.service'
import { Usuario } from 'src/app/models/Usuario'
import { from, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Habilidades } from "src/app/models/habilidades";
import { ViewprojectsService } from "../viewprojectsadmin/viewprojects.service";

@Component({
  selector: 'app-profilecolab',
  templateUrl: './profilecolab.component.html',
  styleUrls: ['./profilecolab.component.css']
})
export class ProfilecolabComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, private profilecolabService: ProfilecolabService,
   private _formBuilder: FormBuilder, private viewproyectsservice: ViewprojectsService) { }
  // Variables
  contrasena: String = "";
  dato;
  usuario: Usuario[] = [];
  @Input() usuarioo: Usuario
  mensaje;
  habilidad;
  firstFormGroup: FormGroup;
  usuarios = null;
  mostrarAlerta = false;
  hab :Habilidades[] =[];
  habilidades: Habilidades [] = [];

  //Sidebar
  opened = false;
  toggleSidebar() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    console.log(this.dato);
    this.profilecolabService.retornar(this.dato).subscribe( result =>  {this.usuarios = result});
    this.firstFormGroup = this._formBuilder.group({
      contrasena: [null,[ Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });

    this.profilecolabService.obtenerColabHabilidades(this.dato)
      .subscribe(result => this.hab = result);

      this.viewproyectsservice.obtenerHabilidades()
      .subscribe(habilidades => this.habilidades=habilidades);
  }

  habilidadcolab: [
    { habilidades: 'Trabajo en equipo' }
  ]

  columnasAVer: String[] = ['habilidad', 'boton'];

  colab = [
    { habilidades: 'Trabajo en equipo' },
    { habilidades: 'Autogestión' }

  ]

  columnasH: String[] = ['habilidades', 'boton'];



  //Servicio Agregar Habilidad
  agregarUsuarioHabilidad() {
    
    this.profilecolabService.agregarHabilidades(this.habilidad).subscribe(habilidad => {
      this.mostrarAlerta=true;
      this.mensaje = 'Se agrego la habilidad ' + this.habilidad + ' Correctamente'
    },  err => {alert("Exploto")} 
    );
    
    setTimeout(() => {
      this.mostrarAlerta=false;
    }, 3000);
  }

  //Servicio Modificar Clave
  CambioClave(contrasena: String) {
    this.profilecolabService.modificarContraseña({ contrasena } as Usuario).subscribe(usuario => {
      this.usuario.toString()
      alert("La contraseña se modifico correctamente")
    });
  }

  borrar(id: number){
    this.profilecolabService.eliminarUsuarioHabilidad(this.dato, id)
      .subscribe(); alert('Se elimino la habilidad correctamente');
      window.location.reload();
  }

  index: number = null;
guardarIndex(i: number){
this.index = i;

}

}
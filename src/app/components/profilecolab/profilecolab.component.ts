import { Component, Inject, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ProfilecolabService } from 'src/app/components/profilecolab/profilecolab.service'
import { Usuario } from 'src/app/models/Usuario'
import { from, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profilecolab',
  templateUrl: './profilecolab.component.html',
  styleUrls: ['./profilecolab.component.css']
})
export class ProfilecolabComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, private profilecolabService: ProfilecolabService, private _formBuilder: FormBuilder) { }
  // Variables
  contrasena: String = "";
  dato: string = "";
  usuario: Usuario[] = [];
  @Input() usuarioo: Usuario
  mensaje;
  habilidad;
  firstFormGroup: FormGroup;
  usuarios = null;

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
  }

  habilidadcolab: [
    { habilidades: 'Trabajo en equipo' }
  ]

  columnasAVer: String[] = ['habilidad', 'boton'];

  colab = [
    { habilidades: 'Trabajo en equipo' },
    { habilidades: 'Autogestión' }

  ]

  columnasAMostrar: String[] = ['habilidades', 'boton'];

  habilidades: string[] = [
    "Programación estructurada (PE) ",
    "Programación modular.",
    "Programación orientada a objetos (POO)",
    "Programación concurrente.",
    "Programación funcional.",
    "Programación lógica.",
    "Buenas Practivas",
    "Desarrollo web",
    "Administracion Base de datos",
    "Manejo de Frameworks",
    "Psicologia",
    "Pedagogia",
    "Trabajo en Equipo",
    "Manejo de la Frustracion",
    "Autoconocimiento",
    "Autoevaluacion",
    "Autoestima",
    "Herramientas para la Insercion Laboral",
    "Comunicacion",
    "Estrategias para la Planificacion",
    "Resilencia",
    "Adaptacion a los cambios",
    "Orientacion al servicio",
    "Resolucion de problemas",
    "Asertividad",
    "Autodominio y Capacidad de articulacion",
    "Etica para Trabajo",
    "Responsabilidad",
  ]


  //Servicio Agregar Habilidad
  agregarUsuarioHabilidad() {
    this.profilecolabService.agregarHabilidades(this.habilidad).subscribe(habilidad => {
      this.mensaje = 'Se agrego la habilidad ' + this.habilidad + ' Correctamente'
    });
    console.log(this.habilidad)
  }

  //Servicio Modificar Clave
  CambioClave(contrasena: String) {
    this.profilecolabService.modificarContraseña({ contrasena } as Usuario).subscribe(usuario => {
      this.usuario.toString()
      alert("La contraseña se modifico correctamente")
    });
  }


}
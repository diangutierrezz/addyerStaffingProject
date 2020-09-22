import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { RutValidator } from 'ng9-rut';

import { Usuario } from "src/app/models/usuario";
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-addusser',
  templateUrl: './addusser.component.html',
  styleUrls: ['./addusser.component.css']
})
export class AddusserComponent implements OnInit {

  opened = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  


  toggleSidebar(){
    this.opened = !this.opened;
  }


  constructor(private _formBuilder: FormBuilder, public rutValidator: RutValidator) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      rol: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rut: ['', Validators.required, this.rutValidator],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
      cargo: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({

    });
    
  }

  get f(){
    return this.firstFormGroup.controls;
  }

  
seleccionado;
mensaje;

mostrar(){
  this.mensaje ='Se agrego la habilidad ' + this.seleccionado + ' correctamente.'
}

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

  cargo: string[] = [
    "Profesor",
    "Mentor",
    "Ayudante",
    "Profesor habilidades blandas",
    "Coordinador",
  ]

  rol: string[] = [
    "Colaborador",
    "Administrador"
  ]

 

  columnasAuseer = ['habilidad'];
  
  colab = [
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    
  ]

  columnasAMostrar: String[] = ['nombre', 'apellido', 'rut', 'fecha', 'telefono', 'correo', 'cargo', 'habilidades'];

  cerrarsesion(){
    localStorage.removeItem("usuario");
  }
}

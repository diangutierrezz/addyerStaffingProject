import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-viewcolabs',
  templateUrl: './viewcolabs.component.html',
  styleUrls: ['./viewcolabs.component.css']
})
export class ViewcolabsComponent implements OnInit {

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }


  constructor() { }

  ngOnInit(): void {
  }

  
  rut: string;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string;
  correo: string;
  contra: string;
  telefono: number;

  nombre: string = '';
  apellido: string = '';
  contrasena: string ='';
  mensaje;
  name: string;

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

  habilidades =[
    {habilidad: 'java'},
    {habilidad: 'java'},
    {habilidad: 'java'},
    {habilidad: 'java'},
    {habilidad: 'java'},
    {habilidad: 'java'},
  ]

  columnasAuseer = ['habilidad'];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits = [
    {name: 'Trabajo en Equipo'},
    {name: 'Autogestión'},
    {name: 'Empatía'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  colab = [
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    {nombre:'Diandra', apellido: 'Palacios', rut: '12.345.678-9', fecha:'09-05-1993', telefono:'56 9 12345678', correo:'diandra@forge.cl', cargo: 'Community Manager', habilidades: 'Redes sociales'},
    
  ]

  columnasAMostrar: String[] = ['nombre', 'apellido', 'rut', 'fecha', 'telefono', 'correo', 'cargo', 'habilidades'];


}

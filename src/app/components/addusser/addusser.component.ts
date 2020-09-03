import { Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-addusser',
  templateUrl: './addusser.component.html',
  styleUrls: ['./addusser.component.css']
})
export class AddusserComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

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

  habilidades: string[] = [
    "Java",
    "JavaScript",
    "Base de Datos",
    "Angular",
  ]

  cargo: string[] = [
    "Profesor",
    "Mentor",
    "Ayudante",
    "Profesor habilidades blandas",
    "Coordinador",

  ]

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits = [
    {name: 'Radiante'},
    {name: 'Bendecida'},
    {name: 'Escarchada'},
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

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  
  
}

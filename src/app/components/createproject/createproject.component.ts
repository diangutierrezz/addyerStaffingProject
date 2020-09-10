import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }


  fechaInicio: string;
  fechaFin: string;
  mensaje;
  name: string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits = [
    {name: 'Trabajo en Equipo'},
    {name: 'Responsabilidad'},
    {name: 'Gestión'},
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

  name2: string;

  visible2 = true;
  selectable2 = true;
  removable2 = true;
  addOnBlur2 = true;
  readonly separatorKeysCodes2: number[] = [ENTER, COMMA];
  fruits2 = [
    {name2: 'Diana Romero'},
    {name2: 'Rodrigo Garay'},
    {name2: 'Evelyn Pérez'},
  ];

  add2(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits2.push({name2: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove2(fruit2): void {
    const index = this.fruits2.indexOf(fruit2);

    if (index >= 0) {
      this.fruits2.splice(index, 1);
    }
  }

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }
 
  filterPost = '';
  posts = [
    {
      "id": 1,
      "nombre": "Mary",
      "apellido": "Casanova",
      "rut": "12.345.678-9",
      "correo": "djkkjdknka",
      "cargo" : "ayudante",
      "habilidades" : "java, base de datos"
    },
    {
      "id": 2,
      "nombre": "laura",
      "apellido": "Casanova",
      "rut": "12.345.678-9",
      "correo": "djkkjdknka",
      "cargo" : "ayudante",
      "habilidades" : "front"
    },
    {
      "id": 3,
      "nombre": "raul",
      "apellido": "Casanova",
      "rut": "12.345.678-9",
      "correo": "djkkjdknka",
      "cargo" : "ayudante",
      "habilidades" : "php, base de datos"
    },
    {
      "id": 4,
      "nombre": "karina",
      "apellido": "Casanova",
      "rut": "12.345.678-9",
      "correo": "djkkjdknka",
      "cargo" : "ayudante",
      "habilidades" : "back"
    },
    {
      "id": 5,
      "nombre": "Mary",
      "apellido": "Casanova",
      "rut": "12.345.678-9",
      "correo": "djkkjdknka",
      "cargo" : "ayudante",
      "habilidades" : "angular"
    }
  ];
  

}

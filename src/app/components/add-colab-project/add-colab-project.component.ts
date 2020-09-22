import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-colab-project',
  templateUrl: './add-colab-project.component.html',
  styleUrls: ['./add-colab-project.component.css']
})
export class AddColabProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  filterPost = '';
  filterPost2 ='';
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

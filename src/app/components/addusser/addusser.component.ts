import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addusser',
  templateUrl: './addusser.component.html',
  styleUrls: ['./addusser.component.css']
})
export class AddusserComponent implements OnInit {

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

  
}

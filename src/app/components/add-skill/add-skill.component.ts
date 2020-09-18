import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
}

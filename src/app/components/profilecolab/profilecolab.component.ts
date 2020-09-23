import { Component, Inject, Input, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { ProfilecolabService } from 'src/app/components/profilecolab/profilecolab.service'
import { Usuario } from 'src/app/models/Usuario'
import { from, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common'; 
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-profilecolab',
  templateUrl: './profilecolab.component.html',
  styleUrls: ['./profilecolab.component.css']
})
export class ProfilecolabComponent implements OnInit {

  

  contrasena: String ="";
  dato : string = "";

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }
  constructor(@Inject(DOCUMENT)document, private profilecolabService: ProfilecolabService) { }

  usuario: Usuario [] = [];

  @Input()usuarioo: Usuario 

  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    console.log(this.dato)
  }

  habilidadcolab:[
    {habilidades:'Trabajo en equipo'}
  ]
  
  columnasAVer: String[] = ['habilidad','boton'];

  colab = [
    {habilidades: 'Trabajo en equipo'},
    {habilidades: 'Autogestión'}
    
  ]
 
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

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
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

  mensaje;

  
habilidad; 
  crearUsuarioHabilidad(){
    this.profilecolabService.agregarHabilidades(this.habilidad).subscribe(habilidad =>  {  
    this.mensaje = 'Se agrego la habilidad ' + this.habilidad + ' Correctamente'
  });
}
  editar(contrasena: String){
    this.profilecolabService.modificarContraseña({contrasena} as Usuario).subscribe (usuario => {  
     this.usuario.toString()
     alert("La contraseña se modifico correctamente")
   });
 }


}
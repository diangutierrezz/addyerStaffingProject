import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profilecolab',
  templateUrl: './profilecolab.component.html',
  styleUrls: ['./profilecolab.component.css']
})
export class ProfilecolabComponent implements OnInit {

  habilidad : String ="";

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }
  constructor() { }

  ngOnInit(): void {
  }

  habilidadcolab:[
    {habilidades:'Trabajo en equipo'}
  ]

  columnasAVer: String[] = ['habilidad','boton'];

  colab = [
    {habilidades: 'Trabajo en equipo'},
    {habilidades: 'Autogestion'}
    
  ]

  columnasAMostrar: String[] = ['habilidades', 'boton'];
 

}


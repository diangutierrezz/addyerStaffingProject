import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';



@Component({
  selector: 'app-profilecolab',
  templateUrl: './profilecolab.component.html',
  styleUrls: ['./profilecolab.component.css']
})
export class ProfilecolabComponent implements OnInit {

  
  dato;
  habilidad : String ="";
  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }
  constructor() { }

  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
  }

  habilidadcolab:[
    {habilidades:'Trabajo en equipo'}
  ]
  

  

  columnasAVer: String[] = ['habilidad','boton'];

  colab = [
    {habilidades: 'Trabajo en equipo'},
    {habilidades: 'Autogestión'}
    
  ]

 

  columnasAMostrar: String[] = ['habilidades', 'boton'];
 
  
}


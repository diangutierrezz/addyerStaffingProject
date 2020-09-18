import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


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
}
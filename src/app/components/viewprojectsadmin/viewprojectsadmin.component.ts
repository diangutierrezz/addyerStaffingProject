import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewprojectsadmin',
  templateUrl: './viewprojectsadmin.component.html',
  styleUrls: ['./viewprojectsadmin.component.css']
})
export class ViewprojectsadminComponent implements OnInit {

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit(): void {
  }
  proyectos = [
    {nombre:'Addyer', descripcion: 'muchas', inicio: 'hoy', fin:'mañana', habilidades:'buenas', colaboradores:'varios'},
    {nombre:'Addyer', descripcion: 'muchas', inicio: 'hoy', fin:'mañana', habilidades:'buenas', colaboradores:'varios'},
    {nombre:'Addyer', descripcion: 'muchas', inicio: 'hoy', fin:'mañana', habilidades:'buenas', colaboradores:'varios'},
    {nombre:'Addyer', descripcion: 'muchas', inicio: 'hoy', fin:'mañana', habilidades:'buenas', colaboradores:'varios'},
    

  ]

  columnasAMostrar: String[] = ['nombre', 'descripcion', 'inicio', 'fin', 'habilidades', 'colaboradores'];
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  opened = false;

  //Sidebar
  toggleSidebar() {
    this.opened = !this.opened;
  }

  constructor() { }

  //Guardar ID del usuario
  dato;
  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    console.log(this.dato)
  }

  // Borrar ID del usuario
  cerrarsesion() {
    localStorage.removeItem("usuario");
  }

}

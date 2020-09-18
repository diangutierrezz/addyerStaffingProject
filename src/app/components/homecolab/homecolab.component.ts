import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecolab',
  templateUrl: './homecolab.component.html',
  styleUrls: ['./homecolab.component.css']
})
export class HomecolabComponent implements OnInit {

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }
  
  constructor(private router: Router) { }

  dato;
  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    console.log(this.dato)
  }

  cerrarsesion(){
    localStorage.removeItem("usuario");
  }

}

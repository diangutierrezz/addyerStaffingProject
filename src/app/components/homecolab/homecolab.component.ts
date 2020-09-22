import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { StaffingService } from "src/app/staffing.service";

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
  
  constructor(private service: StaffingService,private router: Router) { }

  dato;
  rol;
  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    this.rol = JSON.parse(localStorage.getItem("usuario")).rol;
    console.log(this.dato)
    console.log(this.rol)

  }


  cerrarsesion(){
    localStorage.removeItem("usuario");
  }



}

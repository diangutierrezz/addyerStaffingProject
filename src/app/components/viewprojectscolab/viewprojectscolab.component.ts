import { Component, OnInit } from '@angular/core';
import { ViewprojectcolabService } from "src/app/components/viewprojectscolab/viewprojectcolab.service";


@Component({
  selector: 'app-viewprojectscolab',
  templateUrl: './viewprojectscolab.component.html',
  styleUrls: ['./viewprojectscolab.component.css']
})
export class ViewprojectscolabComponent implements OnInit {

  proyectos=null;

  constructor(private viewprojectcolabService:ViewprojectcolabService){}
  dato;
  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

    ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    console.log(this.dato)
    this.viewprojectcolabService.retornar(this.dato).subscribe( result =>  {this.proyectos = result}); 
      
    }
  

  cerrarsesion(){
    localStorage.removeItem("usuario");
  }
  
}

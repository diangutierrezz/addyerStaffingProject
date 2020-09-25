import { Component, OnInit } from '@angular/core';
import { ViewprojectsService } from "../viewprojectsadmin/viewprojects.service";

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

  proyectos=null;
  constructor(private service: ViewprojectsService) { }

  ngOnInit(): void {
    this.service.retornar().subscribe( result =>  {this.proyectos = result}); 
  }

  cerrarsesion(){
    localStorage.removeItem("usuario");
  }
}

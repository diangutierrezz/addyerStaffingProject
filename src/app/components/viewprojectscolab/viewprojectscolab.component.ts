import { Component, OnInit } from '@angular/core';
import { ViewprojectcolabService } from "src/app/components/viewprojectscolab/viewprojectcolab.service";


@Component({
  selector: 'app-viewprojectscolab',
  templateUrl: './viewprojectscolab.component.html',
  styleUrls: ['./viewprojectscolab.component.css']
})
export class ViewprojectscolabComponent implements OnInit {

  usuario=null;

  constructor(private viewprojectcolabService:ViewprojectcolabService){}
  
  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  ngOnInit() {
    this.recuperarUsuario();
    console.log(this.recargar())
  }  

  recargar() {
    this.recuperarUsuario();
  }

  recuperarUsuario() {
    this.viewprojectcolabService.retornar()
      .subscribe( result =>  {this.usuario = result});  
      console.log()  
  }
  
}

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

  cerrarsesion(){
    localStorage.removeItem("usuario");
  }
}

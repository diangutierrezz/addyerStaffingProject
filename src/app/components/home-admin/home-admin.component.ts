import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  
  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

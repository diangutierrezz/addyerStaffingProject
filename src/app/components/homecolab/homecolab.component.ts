import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

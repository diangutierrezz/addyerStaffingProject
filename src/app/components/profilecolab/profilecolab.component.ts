import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profilecolab',
  templateUrl: './profilecolab.component.html',
  styleUrls: ['./profilecolab.component.css']
})
export class ProfilecolabComponent implements OnInit {


  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }


  constructor() { }

  ngOnInit(): void {
  }

}

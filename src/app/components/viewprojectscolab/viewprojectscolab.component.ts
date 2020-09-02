import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewprojectscolab',
  templateUrl: './viewprojectscolab.component.html',
  styleUrls: ['./viewprojectscolab.component.css']
})
export class ViewprojectscolabComponent implements OnInit {

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }


  constructor() { }

  ngOnInit(): void {
  }

}

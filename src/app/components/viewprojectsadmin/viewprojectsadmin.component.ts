import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewprojectsadmin',
  templateUrl: './viewprojectsadmin.component.html',
  styleUrls: ['./viewprojectsadmin.component.css']
})
export class ViewprojectsadminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opened = false;

  toggleSidebar(){
    this.opened = !this.opened;
  }
}

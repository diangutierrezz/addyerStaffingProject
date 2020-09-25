import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  images = [180, 2, 4].map((n) => `https://picsum.photos/id/${n}/600/200`);



  constructor(private_config: NgbCarouselConfig) { }

  ngOnInit(): void {
    localStorage.clear()
  }

}

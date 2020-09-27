import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { UsuarioHabilidad } from "src/app/models/UsuarioHabilidad";
import { StaffingService } from "src/app/staffing.service";


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
  
  constructor( private service: StaffingService) { }

  ngOnInit(): void {
    this.service.obtenerUsuariosxHabilidad()
    .subscribe(usuarioHabilidad => this.usuarioHabilidad=usuarioHabilidad);
  }

  filterPost = '';
  usuarioHabilidad: UsuarioHabilidad [] = [];



}

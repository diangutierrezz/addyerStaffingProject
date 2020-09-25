import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { InicioComponent } from './inicio.component';

@Injectable()
export class validarRutasAdmin implements CanActivate {

  constructor(private router: Router) { }

  rol;

  //Rutas Administrador

  canActivate() {

    if (localStorage.getItem("usuario") == undefined) {
      alert('No has iniciado sesion');
      this.router.navigate([""]);
      return false;
    }
    this.rol = JSON.parse(localStorage.getItem("usuario")).rol;
    if (this.rol == 'Administrador') {
      alert('No tienes permisos');
      this.router.navigate(["homeadmin"]);
      return false;

    } else {
      return true;
    }


  }




}
import { Component, OnInit } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class validarRutasColab implements CanActivate {

  constructor(private router: Router) { }

  rol;

  //Rutas Colaborador

  canActivate() {

    if (localStorage.getItem("usuario") == undefined) {
      alert('No has iniciado sesion');
      this.router.navigate([""]);
      return false;

    }
    this.rol = JSON.parse(localStorage.getItem("usuario")).rol;
    if (this.rol == 'Colaborador') {
      alert('No tienes permisos');
      this.router.navigate(["homecolab"]);
      return false;

    } else {
      return true;
    }

  }

}
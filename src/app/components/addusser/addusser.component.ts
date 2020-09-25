import { Component, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";
import { RutValidator } from 'ng9-rut';
import { RouterLink } from '@angular/router';
import { AddSkillService } from "../addusser/add-skill.service";


@Component({
  selector: 'app-addusser',
  templateUrl: './addusser.component.html',
  styleUrls: ['./addusser.component.css']
})
export class AddusserComponent implements OnInit {


  //Funciones Sidebar
  opened = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }


  constructor(private _formBuilder: FormBuilder, public rutValidator: RutValidator, private service: StaffingService, private addSkillService: AddSkillService) { }


  ngOnInit(): void {
    // Validaciones Datos Formulario
    this.firstFormGroup = this._formBuilder.group({
      rol: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rut: [null, [Validators.required, this.rutValidator,Validators.minLength(8), Validators.maxLength(9)]],
      contrasena: [null,[ Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      cargo: ['', Validators.required],
      correo: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])),


    });
    this.secondFormGroup = this._formBuilder.group({

    });

  }

  //Error en Campo Vacio o Dato Erroneo
  get f() {
    return this.firstFormGroup.controls;
  }

  // Cargos
  cargos: string[] = [
    "Profesor Programacion",
    "Mentor",
    "Ayudante",
    "Profesor habilidades blandas",
    "Coordinador",
    "Tutor",
  ]

  // Roles
  rols: string[] = [
    "Colaborador",
    "Administrador"
  ]


  cerrarsesion() {
    localStorage.removeItem("usuario");
  }


  // Habilidades
  habilidades: string[] = [
    "Programación estructurada (PE) ",
    "Programación modular.",
    "Programación orientada a objetos (POO)",
    "Programación concurrente.",
    "Programación funcional.",
    "Programación lógica.",
    "Buenas Practivas",
    "Desarrollo web",
    "Administracion Base de datos",
    "Manejo de Frameworks",
    "Psicologia",
    "Pedagogia",
    "Trabajo en Equipo",
    "Manejo de la Frustracion",
    "Autoconocimiento",
    "Autoevaluacion",
    "Autoestima",
    "Herramientas para la Insercion Laboral",
    "Comunicacion",
    "Estrategias para la Planificacion",
    "Resilencia",
    "Adaptacion a los cambios",
    "Orientacion al servicio",
    "Resolucion de problemas",
    "Asertividad",
    "Autodominio y Capacidad de articulacion",
    "Etica para Trabajo",
    "Responsabilidad",
  ]

  columnasAuseer = ['habilidad'];
  habilidad;
  mensaje;
  usuario: Usuario[] = [];

  // Servicio Para Crear Usuario
  crearUsuario(rol: String, nombre: String, apellido: String, rut: String, correo: String, contrasena: String, cargo: String) {
    this.service.AgregarUsuario({ rol, nombre, apellido, rut, correo, contrasena, cargo } as Usuario).subscribe(usuario => {
      this.usuario.push(usuario)
    });

  }

  // Servicio para Asociar Habilidad al usuario Creado.
  crearUsuarioHabilidad(rut: string) {
    this.addSkillService.crearUsuarioHabilidades(rut, this.habilidad).subscribe(habilidad => {
    });
    this.mensaje = 'Se agrego la habilidad ' + this.habilidad + ' Correctamente'
  }
}
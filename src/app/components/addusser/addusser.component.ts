import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";
import { RutValidator } from 'ng9-rut';
import { RouterLink } from '@angular/router';
import { AddSkillService } from "../addusser/add-skill.service";
import { ViewprojectsService } from "../viewprojectsadmin/viewprojects.service";
import { Habilidades } from "src/app/models/habilidades";
import { MatStepper } from '@angular/material/stepper';


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
  mostrarAlerta = false;
  habilidades: Habilidades [] = [];
  habilidadElegida;
  columnasAuseer = ['habilidad'];
  mensaje;
  usuario: Usuario[] = [];

  toggleSidebar() {
    this.opened = !this.opened;
  }


  constructor(private _formBuilder: FormBuilder, public rutValidator: RutValidator,
     private service: StaffingService, private addSkillService: AddSkillService,
     private viewproyectsservice: ViewprojectsService) { }


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

    this.viewproyectsservice.obtenerHabilidades()
    .subscribe(habilidades => this.habilidades=habilidades);

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



  

  // Servicio Para Crear Usuario
  crearUsuario(rol: String, nombre: String, apellido: String, rut: String, correo: String, contrasena: String, cargo: String, stepper: MatStepper) {
    this.service.AgregarUsuario({ rol, nombre, apellido, rut, correo, contrasena, cargo } as Usuario).subscribe(usuario => {
      if(usuario[0] == "Usuario Existe"){
        alert("Usuario ya existe en la base de datos")
       } if (usuario[0] == "Usuario Creado"){
         console.log("funciono")
        stepper.selected.completed = true;
        stepper.next();
         alert("Usuario Creado Correctamente")
         
       }
    });

  }

  // Servicio para Asociar Habilidad al usuario Creado.
  crearUsuarioHabilidad(rut: string) {
    console.log(rut)
    console.log(this.habilidadElegida)
    this.addSkillService.crearUsuarioHabilidades(rut,this.habilidadElegida).subscribe(habilidad => {
      this.mostrarAlerta=true;
      this.mensaje = 'Se agrego la habilidad ' + this.habilidadElegida + ' Correctamente'
    },  err => {alert("Error al agregar la habilidad")} 
    );
    
    setTimeout(() => {
      this.mostrarAlerta=false;
    }, 3000);
  }
}
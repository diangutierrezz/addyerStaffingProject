import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Usuario } from "src/app/models/usuario";
import { StaffingService } from "src/app/staffing.service";
import { RutValidator } from 'ng9-rut';


@Component({
  selector: 'app-addusser',
  templateUrl: './addusser.component.html',
  styleUrls: ['./addusser.component.css']
})
export class AddusserComponent implements OnInit {

  opened = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;


  toggleSidebar(){
    this.opened = !this.opened;
  }


  constructor(private _formBuilder: FormBuilder, public rutValidator: RutValidator, private service: StaffingService) {}

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      rol: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rut: ['', Validators.required, this.rutValidator],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
      cargo: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  get f(){
    return this.firstFormGroup.controls;
  }


  cargo: string[] = [
    "Profesor",
    "Mentor",
    "Ayudante",
    "Profesor habilidades blandas",
    "Coordinador",
  ]

  rol: string[] = [
    "Colaborador",
    "Administrador"
  ]


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits = [
    {name: 'Trabajo en Equipo'},
    {name: 'Autogestión'},
    {name: 'Empatía'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

  }



  cerrarsesion(){
    localStorage.removeItem("usuario");
  }

  seleccionado;
  mensaje;

  mostrar(){
    this.mensaje ='Se agrego la habilidad ' + this.seleccionado + ' correctamente.'
  }

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

  crearUsuario(rol: String, nombre: String, apellido: String, rut: String, correo: String, contraseña: String, cargo: String) {

    /* ningun campo vacío */
    if (!correo.trim()) {
      alert("Campo correo vacio");
    }
    else if (!contraseña.trim()) {
      alert("Campo contraseña vacio");
    }

    /* 
        verificación de logueo */
    else {
      
      this.service.AgregarUsuario({ rol,nombre,apellido,rut,correo, contraseña,cargo } as Usuario).subscribe(userResponse => 
        { localStorage.setItem("usuario",JSON.stringify(userResponse));
        alert('RegistroOK')  
    });
    }   
  }
}
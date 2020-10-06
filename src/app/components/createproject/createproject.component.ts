import { Component, OnInit } from '@angular/core';
import { UsuarioxHabilidad } from "src/app/models/UsuarioxHabilidad";
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Proyecto } from "src/app/models/proyecto";
import { Habilidades } from "src/app/models/habilidades";
import { CreateprojectService } from "./createproject.service";


@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

    usuarioxHabilidad: UsuarioxHabilidad [] = [];
    estadoBoton: boolean[] = [];
    proyecto: Proyecto [] = [];
    habilidades: Habilidades [] = [];
    habilidadElegida;
    mensaje;
    opened = false;
    firstFormGroup: FormGroup; 
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    isEditable = false;
    mostrarAlerta = false;
    disable = null;
    filterPost = '';
    index: number = null;
    nombreproyecto;
    fechainicio;


    constructor(  public service: CreateprojectService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
 
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      inicio: ['', Validators.required],
      final: ['', Validators.required]
    });
      //obtener habilidades del select
    this.service.obtenerHabilidades()
    .subscribe(habilidades => this.habilidades=habilidades);
    console.log(this.habilidades)
    //obtener los colaboradores para la tabla
    
    this.service.obtenerUsuariosxHabilidad()
    .subscribe(usuarioHabilidad => this.usuarioxHabilidad=usuarioHabilidad);
  }

 

  get f(){
    return this.firstFormGroup.controls;
  }
  toggleSidebar(){
    this.opened = !this.opened;
  }
 
  crearProyecto(nombreproyecto: String, descripcion: String, fechainicio: String, fechafinal: String){
    fechainicio = fechainicio.replace(RegExp('/', 'g'), "-")
    fechafinal = fechafinal.replace(RegExp('/', 'g'), "-")
    this.service.agregarProyecto({nombreproyecto, descripcion, fechainicio, fechafinal}as Proyecto).subscribe(proyecto => {
      this.proyecto.push(proyecto)   
      console.log(nombreproyecto)
      console.log(descripcion)
      console.log(fechainicio)
      console.log(fechafinal)
    
      alert('Proyecto creado con éxito')
    }); 
  }
 
  crearProyectoHabilidad(nombreproyecto: string, fechainicio:string){
    fechainicio = fechainicio.replace(RegExp('/', 'g'), "-")
    console.log(nombreproyecto)
    console.log(fechainicio)
    console.log(this.habilidadElegida)
    this.service.crearProyectoHabilidad(nombreproyecto, fechainicio, this.habilidadElegida).subscribe(habilidad => { 
      this.mostrarAlerta=true;
      this.mensaje = 'Se agrego la habilidad ' + this.habilidadElegida + ' Correctamente'
    },  err => {alert("Error al agregar la habilidad")} 
    );
    
    setTimeout(() => {
      this.mostrarAlerta=false;
    }, 3000);
  }
  guardarIndex(i: number,fechainicio:string){
    fechainicio = fechainicio.replace(RegExp('/', 'g'), "-")
    this.index = i;
    console.log(this.index, "posicion tabla")
    console.log(this.usuarioxHabilidad[this.index].id_usuario, "Id usuario")
    this.service.crearUsuarioProyecto(this.usuarioxHabilidad[this.index].id_usuario,this.nombreproyecto, fechainicio).subscribe();
    this.estadoBoton[i]=true;
    this.index=null;  
    alert("Se Agregó el colaborador correctamente")
      }
      
    }
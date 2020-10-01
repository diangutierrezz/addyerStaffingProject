import { Component, Inject, Input, OnInit, ɵConsole } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ProfilecolabService } from 'src/app/components/profilecolab/profilecolab.service'
import { Usuario } from 'src/app/models/Usuario'
import { from, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Habilidades } from "src/app/models/habilidades";
import { ViewprojectsService } from "../viewprojectsadmin/viewprojects.service";

@Component({
  selector: 'app-profilecolab',
  templateUrl: './profilecolab.component.html',
  styleUrls: ['./profilecolab.component.css']
})
export class ProfilecolabComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document, private profilecolabService: ProfilecolabService,
   private _formBuilder: FormBuilder, private viewproyectsservice: ViewprojectsService) { 
    this.show = false;
   }
  // Variables
  contrasena: String = "";
  dato;
  usuario: Usuario[] = [];
  @Input() usuarioo: Usuario
  mensaje;
  habilidadSeleccionada;
  firstFormGroup: FormGroup;
  usuarios = null;
  mostrarAlerta = false;
  habilidadesColaborador = null;
  habilidades: Habilidades [] = [];

  show: boolean;
  password() {
    this.show = !this.show;
}

  //Sidebar
  opened = false;
  toggleSidebar() {
    this.opened = !this.opened;
  }

  ngOnInit(): void {
    this.dato = JSON.parse(localStorage.getItem("usuario")).id;
    console.log(this.dato);

    //datos colaborador
    this.profilecolabService.retornar(this.dato).subscribe( 
      result =>  {this.usuarios = result,
        // Habilidades Colaborador
     this.profilecolabService.obtenerColabHabilidades().subscribe(
       result => this.habilidadesColaborador = result,
       )
     }
     
     );
    
    // Todas las habilidades
    this.viewproyectsservice.obtenerHabilidades().subscribe(result => this.habilidades = result)
    console.log(this.habilidades, "Select")
    
      this.firstFormGroup = this._formBuilder.group({
      contrasena: [null,[ Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });
    
    

  }


  colab = [
    { habilidades: 'Trabajo en equipo' },
    { habilidades: 'Autogestión' }

  ]

  columnasH: String[] = ['habilidades', 'boton'];



  //Servicio Agregar Habilidad
  agregarUsuarioHabilidad() {
    console.log(this.habilidadSeleccionada)
    this.profilecolabService.agregarHabilidades(this.habilidadSeleccionada).subscribe
    (habilidad => {this.mostrarAlerta=true; this.mensaje = 'Se agrego la habilidad ' + this.habilidadSeleccionada + ' Correctamente'
    },  err => {alert(this.habilidadSeleccionada)} 
    );
    
    setTimeout(() => {
      this.mostrarAlerta=false;
    }, 3000);
    window.location.reload();
  }


  //Servicio Modificar Clave
  CambioClave(contrasena: String) {
    this.profilecolabService.modificarContraseña({ contrasena } as Usuario).subscribe(usuario => {
      this.usuario.toString()
      alert("La contraseña se modifico correctamente")
    });
    contrasena = null;
  }

 borrarHabilidadUsuario(){
 this.profilecolabService.eliminarUsuarioHabilidad(this.dato, this.habilidadesColaborador[this.index].id)
.subscribe(); 
console.log(this.habilidadesColaborador[this.index].id)
alert('Se elimino la habilidad correctamente');
 window.location.reload();
}

  // Guardar Id Habilidad para borrar
  index: number = null;
guardarIndex(i: number){
this.index = i;
console.log(this.index);
console.log(this.habilidadesColaborador[this.index].id)

}

prueba(){
  console.log('holatu')
}



}
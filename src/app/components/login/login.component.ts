import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pass;
  mensaje;
  constructor(private router: Router) {
  
  }
  
    validar(user,pass){
      if(this.user=="admin" && this.pass=="12345"){
        this.router.navigate(['homeadmin']);
      } if(this.user=="colab" && this.pass=="12345"){
        this.router.navigate(['homecolab']);
      } else {
          this.mensaje="Datos incorrectos"
          this.user;
          this.pass;
      }    
  }

  

  ngOnInit(): void {
  }

}


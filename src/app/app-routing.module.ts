import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddusserComponent  } from "../app/components/addusser/addusser.component";

import { HomeAdminComponent } from "../app/components/home-admin/home-admin.component";
import { HomecolabComponent  } from "../app/components/homecolab/homecolab.component";
import { InicioComponent  } from "../app/components/inicio/inicio.component";
import { LoginComponent  } from "../app/components/login/login.component";
import { ProfilecolabComponent  } from "../app/components/profilecolab/profilecolab.component";
import { ViewprojectsadminComponent  } from "../app/components/viewprojectsadmin/viewprojectsadmin.component";
import {  ViewprojectscolabComponent } from "../app/components/viewprojectscolab/viewprojectscolab.component";
import { CreateprojectComponent } from "../app/components/createproject/createproject.component";


const routes: Routes = [
  { path: "", component:InicioComponent},
  { path: "login", component:LoginComponent},
  { path: "homeadmin", component:HomeAdminComponent},
  { path: "adduser", component:AddusserComponent},
  { path: "viewprojectsadmin", component:ViewprojectsadminComponent},
  { path: "homecolab", component:HomecolabComponent},
  { path: "profilecolab", component:ProfilecolabComponent},
  { path: "viewprojectscolab", component:ViewprojectscolabComponent},
  { path: "createproject", component:CreateprojectComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

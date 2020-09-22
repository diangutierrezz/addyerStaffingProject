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
import { LogincolabComponent } from "../app/components/logincolab/logincolab.component";
import { ViewcolabsComponent } from "../app/components/viewcolabs/viewcolabs.component";
import { AddSkillComponent } from "../app/components/add-skill/add-skill.component";
import { RecoverpassComponent } from "../app/components/recoverpass/recoverpass.component";
import { AddColabProjectComponent } from "../app/components/add-colab-project/add-colab-project.component"
import { AddSkillsProjectComponent } from "../app/components/add-skills-project/add-skills-project.component"


const routes: Routes = [
  { path: "", component:InicioComponent},
  { path: "login", component:LoginComponent},
  { path: "homeadmin", component:HomeAdminComponent},
  { path: "addusser", component:AddusserComponent},
  { path: "viewprojectsadmin", component:ViewprojectsadminComponent},
  { path: "homecolab", component:HomecolabComponent},
  { path: "profilecolab", component:ProfilecolabComponent},
  { path: "viewprojectscolab", component:ViewprojectscolabComponent},
  { path: "createproject", component:CreateprojectComponent},
  { path: "logincolab", component:LogincolabComponent},
  { path: "viewcolabs", component:ViewcolabsComponent},
  { path:"addskill", component:AddSkillComponent},
  { path:"recoverpass", component:RecoverpassComponent},
  { path:"addcolabprojects", component:AddColabProjectComponent},
  { path:"addskkillsprojects", component:AddSkillsProjectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

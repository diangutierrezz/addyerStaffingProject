import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng9RutModule } from 'ng9-rut'

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { AddusserComponent } from './components/addusser/addusser.component';
import { ViewprojectsadminComponent } from './components/viewprojectsadmin/viewprojectsadmin.component';
import { HomecolabComponent } from './components/homecolab/homecolab.component';
import { ProfilecolabComponent } from './components/profilecolab/profilecolab.component';
import { ViewprojectscolabComponent } from './components/viewprojectscolab/viewprojectscolab.component';
import { CreateprojectComponent } from "../app/components/createproject/createproject.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter.pipe'
import { LogincolabComponent } from './components/logincolab/logincolab.component'
import { HttpClientModule } from '@angular/common/http';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { RecoverpassComponent } from './components/recoverpass/recoverpass.component';
import { ViewcolabsComponent } from './components/viewcolabs/viewcolabs.component';
import { AddSkillsProjectComponent } from './components/add-skills-project/add-skills-project.component';
import { AddColabProjectComponent } from './components/add-colab-project/add-colab-project.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HomeAdminComponent,
    AddusserComponent,
    ViewprojectsadminComponent,
    HomecolabComponent,
    ProfilecolabComponent,
    ViewprojectscolabComponent,
    CreateprojectComponent,
    FilterPipe,
    LogincolabComponent,
    AddSkillComponent,
    RecoverpassComponent,
    ViewcolabsComponent,
    AddSkillsProjectComponent,
    AddColabProjectComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    FormsModule,
    CommonModule,
    NgbModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    Ng9RutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

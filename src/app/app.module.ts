import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

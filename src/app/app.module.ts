import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'ng-sidebar';
import { MatCardModule } from '@angular/material/card';

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
import {OptionAdminComponent} from 'src/app/components/option-admin/option-admin.component';
import { FilterPipe } from './pipes/filter.pipe'
import { LogincolabComponent } from './components/logincolab/logincolab.component'
import { HttpClientModule } from '@angular/common/http';
import { AddSkillComponent } from './components/add-skill/add-skill.component';
import { RecoverpassComponent } from './components/recoverpass/recoverpass.component';
import { ViewcolabsComponent } from './components/viewcolabs/viewcolabs.component';
import { ModifyuserComponent } from './components/modifyuser/modifyuser.component';


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
    OptionAdminComponent,
    FilterPipe,
    LogincolabComponent,
    AddSkillComponent,
    RecoverpassComponent,
    ViewcolabsComponent,
    ModifyuserComponent,
    
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
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

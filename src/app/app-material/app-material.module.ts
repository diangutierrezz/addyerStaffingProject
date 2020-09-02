import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class AppMaterialModule { }

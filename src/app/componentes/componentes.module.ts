import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CampoDataComponent } from './campo-data/campo-data.component';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [CampoDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule
  ],
  exports:[
    CampoDataComponent
  ]
})
export class ComponentesModule { }

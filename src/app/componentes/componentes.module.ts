import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CampoDataComponent } from './campo-data/campo-data.component';
import { CampoValorComponent } from './campo-valor/campo-valor.component';



@NgModule({
  declarations: [CampoDataComponent, CampoValorComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    InputNumberModule
  ],
  exports:[
    CampoDataComponent,
    CampoValorComponent
  ]
})
export class ComponentesModule { }

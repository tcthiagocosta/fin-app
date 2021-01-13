import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DpDatePickerModule } from "ng2-date-picker";
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { CampoDataComponent } from './campo-data/campo-data.component';
import { CampoValorComponent } from './campo-valor/campo-valor.component';
import { DataPickerComponent } from './data-picker/data-picker.component';



@NgModule({
  declarations: [CampoDataComponent, CampoValorComponent, DataPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    InputNumberModule,
    BrowserAnimationsModule,
    DpDatePickerModule
  ],
  exports:[
    CampoDataComponent,
    CampoValorComponent,
    DataPickerComponent
  ]
})
export class ComponentesModule { }

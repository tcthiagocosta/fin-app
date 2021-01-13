import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';
import { TransferenciaFormComponent } from './transferencia-form/transferencia-form.component';
import { TransferenciaListaComponent } from './transferencia-lista/transferencia-lista.component';
import { TransferenciaRoutingModule } from './transferencia-routing.module';


@NgModule({
  declarations: [TransferenciaFormComponent, TransferenciaListaComponent],
  imports: [
    CommonModule,
    TransferenciaRoutingModule,
    FormsModule,
    ComponentesModule
  ],
  exports: [
    TransferenciaFormComponent,
    TransferenciaListaComponent
  ],
})
export class TransferenciaModule { }

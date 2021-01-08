import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { LancamentoListaComponent } from './lancamento-lista/lancamento-lista.component';
import { LancamentoRoutingModule } from './lancamento-routing.module';



@NgModule({
  declarations: [LancamentoListaComponent, LancamentoFormComponent],
  imports: [
    CommonModule,
    LancamentoRoutingModule,
    FormsModule,
    ComponentesModule,
    ComponentesModule
  ],
  exports: [
    LancamentoListaComponent,
    LancamentoFormComponent
  ]
})
export class LancamentoModule { }

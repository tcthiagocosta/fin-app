import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentesModule } from '../componentes/componentes.module';
import { FaturaCartaoFormComponent } from './faturaCartao-form/faturaCartao-form.component';
import { FaturaCartaoListaComponent } from './faturaCartao-lista/faturaCartao-lista.component';
import { FaturaCartaoRoutingModule } from './faturaCartao-routing.module';
import { LancamentoFaturaFormComponent } from './lancamento-fatura-form/lancamento-fatura-form.component';




@NgModule({
  declarations: [FaturaCartaoFormComponent, FaturaCartaoListaComponent, LancamentoFaturaFormComponent],
  imports: [
    CommonModule,
    FaturaCartaoRoutingModule,
    FormsModule,
    ComponentesModule
  ],
  exports: [
    FaturaCartaoFormComponent,
    FaturaCartaoListaComponent,
    LancamentoFaturaFormComponent
  ]
})
export class FaturaCartaoModule { }

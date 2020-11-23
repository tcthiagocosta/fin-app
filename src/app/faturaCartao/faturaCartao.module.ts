import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaturaCartaoRoutingModule } from './faturaCartao-routing.module';
import { FaturaCartaoFormComponent } from './faturaCartao-form/faturaCartao-form.component';
import { FaturaCartaoListaComponent } from './faturaCartao-lista/faturaCartao-lista.component';
import { FormsModule } from '@angular/forms';

import {ComponentesModule} from '../componentes/componentes.module'


@NgModule({
  declarations: [FaturaCartaoFormComponent, FaturaCartaoListaComponent],
  imports: [
    CommonModule,
    FaturaCartaoRoutingModule,
    FormsModule,
    ComponentesModule
  ],
  exports: [
    FaturaCartaoFormComponent,
    FaturaCartaoListaComponent
  ]
})
export class FaturaCartaoModule { }

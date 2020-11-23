import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { ContaFormComponent } from './conta-form/conta-form.component';
import { ContaListaComponent } from './conta-lista/conta-lista.component';

import { ContaService } from './conta.service'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContaFormComponent, ContaListaComponent],
  imports: [
    CommonModule,
    ContaRoutingModule,
    FormsModule
  ],
  exports: [
    ContaFormComponent,
    ContaListaComponent
  ]
})
export class ContaModule { }

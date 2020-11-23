import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaoRoutingModule } from './cartao-routing.module';
import { CartaoFormComponent } from './cartao-form/cartao-form.component';
import { CartaoListaComponent } from './cartao-lista/cartao-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CartaoFormComponent, CartaoListaComponent],
  imports: [
    CommonModule,
    CartaoRoutingModule,
    FormsModule
  ],
  exports: [
    CartaoFormComponent,
    CartaoListaComponent
  ]
})
export class CartaoModule { }

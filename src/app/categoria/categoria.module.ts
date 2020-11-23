import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [CategoriaFormComponent, CategoriaListaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule
  ],
  exports: [
    CategoriaFormComponent,
    CategoriaListaComponent
  ]
})
export class CategoriaModule { }

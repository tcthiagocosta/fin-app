import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategoriaRoutingModule } from './subCategoria-routing.module';
import { SubCategoriaFormComponent } from './subCategoria-form/subCategoria-form.component';
import { SubCategoriaListaComponent } from './subCategoria-lista/subCategoria-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SubCategoriaFormComponent, SubCategoriaListaComponent],
  imports: [
    CommonModule,
    SubCategoriaRoutingModule,
    FormsModule
  ],
  exports: [
    SubCategoriaFormComponent,
    SubCategoriaListaComponent
  ]
})
export class SubCategoriaModule { }

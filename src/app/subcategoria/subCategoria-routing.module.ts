import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../usuario/auth/auth.guard';
import { SubCategoriaFormComponent } from './subCategoria-form/subCategoria-form.component';
import { SubCategoriaListaComponent } from './subCategoria-lista/subCategoria-lista.component';


const routes: Routes = [
  {
    path: 'subCategoria', component: LayoutComponent, canActivate: [AuthGuard], data: {
      roles: ["ROLE_ADMIN"]
    }, children: [
      { path: 'form', component: SubCategoriaFormComponent },
      { path: 'form/:id', component: SubCategoriaFormComponent },
      { path: 'lista', component: SubCategoriaListaComponent },
      { path: '', redirectTo: '/subCategoria/lista', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubCategoriaRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../usuario/auth/auth.guard';
import { CartaoFormComponent } from './cartao-form/cartao-form.component';
import { CartaoListaComponent } from './cartao-lista/cartao-lista.component';


const routes: Routes = [
  {
    path: 'cartao', component: LayoutComponent, canActivate: [AuthGuard], data: {
      roles: ["ROLE_ADMIN"]
    }, children: [
      { path: 'form', component: CartaoFormComponent },
      { path: 'form/:id', component: CartaoFormComponent },
      { path: 'lista', component: CartaoListaComponent },
      { path: '', redirectTo: '/cartao/lista', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartaoRoutingModule { }

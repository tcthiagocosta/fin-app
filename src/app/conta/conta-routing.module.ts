import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../usuario/auth/auth.guard';
import { ContaFormComponent } from './conta-form/conta-form.component';
import { ContaListaComponent } from './conta-lista/conta-lista.component';


const routes: Routes = [
  {
    path: 'conta', component: LayoutComponent, canActivate: [AuthGuard], data: {
      roles: ["ROLE_ADMIN"]
    }, children: [
      { path: 'form', component: ContaFormComponent },
      { path: 'form/:id', component: ContaFormComponent },
      { path: 'lista', component: ContaListaComponent },
      { path: '', redirectTo: '/conta/lista', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }

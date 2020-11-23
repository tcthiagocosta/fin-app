import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../usuario/auth/auth.guard';
import { FaturaCartaoFormComponent } from './faturaCartao-form/faturaCartao-form.component';
import { FaturaCartaoListaComponent } from './faturaCartao-lista/faturaCartao-lista.component';


const routes: Routes = [
  {
    path: 'faturaCartao', component: LayoutComponent, canActivate: [AuthGuard], data: {
      roles: ["ROLE_ADMIN"]
    }, children: [
      { path: 'form', component: FaturaCartaoFormComponent },
      { path: 'form/:id', component: FaturaCartaoFormComponent },
      { path: 'lista', component: FaturaCartaoListaComponent },
      { path: '', redirectTo: '/faturaCartao/lista', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaturaCartaoRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../usuario/auth/auth.guard';
import { LancamentoFormComponent } from './lancamento-form/lancamento-form.component';
import { LancamentoListaComponent } from './lancamento-lista/lancamento-lista.component';

const routes: Routes = [
  {
    path: 'lancamento', component: LayoutComponent, canActivate: [AuthGuard], data: {
      roles: ["ROLE_ADMIN"]
    }, children: [
      { path: 'form', component: LancamentoFormComponent },
      { path: 'form/:id', component: LancamentoFormComponent },
      { path: 'lista', component: LancamentoListaComponent },
      { path: '', redirectTo: '/lancamento/lista', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentoRoutingModule { }
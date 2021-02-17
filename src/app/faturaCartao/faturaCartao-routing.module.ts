import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../usuario/auth/auth.guard';
import { FaturaCartaoFormComponent } from './faturaCartao-form/faturaCartao-form.component';
import { FaturaCartaoListaComponent } from './faturaCartao-lista/faturaCartao-lista.component';
import { LancamentoFaturaFormComponent } from './lancamento-fatura-form/lancamento-fatura-form.component';


const routes: Routes = [
  {
    path: 'faturaCartao', component: LayoutComponent, canActivate: [AuthGuard], data: {
      roles: ["ROLE_ADMIN"]
    }, children: [
      { path: 'form', component: FaturaCartaoFormComponent },
      { path: 'form/:id', component: FaturaCartaoFormComponent },
      { path: 'lista', component: FaturaCartaoListaComponent },
      { path: 'lancamento', component: LancamentoFaturaFormComponent },
      { path: 'lancamento/:id', component: LancamentoFaturaFormComponent },
      { path: '', redirectTo: '/faturaCartao/lista', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaturaCartaoRoutingModule { }

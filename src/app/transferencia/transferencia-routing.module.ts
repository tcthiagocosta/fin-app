import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../usuario/auth/auth.guard';
import { TransferenciaFormComponent } from './transferencia-form/transferencia-form.component';
import { TransferenciaListaComponent } from './transferencia-lista/transferencia-lista.component';


const routes: Routes = [
  {
    path: 'transferencia', component: LayoutComponent, canActivate: [AuthGuard], data: {
      roles: ["ROLE_ADMIN"]
    }, children: [
      { path: 'form', component: TransferenciaFormComponent },
      { path: 'form/:id', component: TransferenciaFormComponent },
      { path: 'lista', component: TransferenciaListaComponent },
      { path: '', redirectTo: '/transferencia/lista', pathMatch: 'full' }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransferenciaRoutingModule { }

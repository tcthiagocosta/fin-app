import { AuthService } from './usuario/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { TokenInterceptor } from './usuario/auth/token.interceptor';

import { TemplateModule } from './template/template.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'

import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';

import { ContaModule } from './conta/conta.module'
import { CartaoModule } from './cartao/cartao.module'
import { CategoriaModule } from './categoria/categoria.module'
import { SubCategoriaModule } from './subCategoria/subCategoria.module'
import { FaturaCartaoModule } from './faturaCartao/faturaCartao.module';

import {ComponentesModule} from './componentes/componentes.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    NotfoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    BrowserAnimationsModule,
    UsuarioModule,
    ContaModule,  
    CartaoModule,
    CategoriaModule,
    SubCategoriaModule,
    FaturaCartaoModule,
    ComponentesModule,
    NgbModule
  ],
  providers: [
    AuthService,
    UsuarioService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

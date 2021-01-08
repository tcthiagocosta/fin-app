import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaoModule } from './cartao/cartao.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ComponentesModule } from './componentes/componentes.module';
import { ContaModule } from './conta/conta.module';
import { FaturaCartaoModule } from './faturaCartao/faturaCartao.module';
import { HomeComponent } from './home/home.component';
import { LancamentoModule } from './lancamento/lancamento.module';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SubCategoriaModule } from './subCategoria/subCategoria.module';
import { TemplateModule } from './template/template.module';
import { AuthService } from './usuario/auth/auth.service';
import { TokenInterceptor } from './usuario/auth/token.interceptor';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';

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
    NgbModule,
    LancamentoModule
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

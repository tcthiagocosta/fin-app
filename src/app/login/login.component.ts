import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from '../usuario/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: string;
  password: string;   
  mensagemSucesso: string;
  errors: any[];

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(){
    this.authService    
    .tentarLogar(this.login, this.password)
    .subscribe(response => {
      const access_token = JSON.stringify(response);
      localStorage.setItem('access_token',access_token);
      this.router.navigate(['/home']);
    }, errorResponse => {
      this.errors = ['Usuário ou Senha inválidos!']
    })    
  }

}

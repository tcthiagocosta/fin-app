import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';


import { Cartao } from '../cartao'
import { CartaoService } from '../cartao.service';

@Component({
  selector: 'app-cartao-form',
  templateUrl: './cartao-form.component.html',
  styleUrls: ['./cartao-form.component.css']
})
export class CartaoFormComponent implements OnInit {

  cartao: Cartao
  success: boolean = false
  errors: any[]
  id: number

  constructor(
    private router: Router,
    private service: CartaoService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cartao = new Cartao()
  }

  ngOnInit(): void {

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getCartaoId(this.id)
            .subscribe(
              response => this.cartao = response,
              errorResponse => this.cartao = new Cartao()
            )
        }
      }
    )
  }

  voltarParaListagem() {
    this.router.navigate(['/cartao/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.cartao)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar']
          });
    } else {
      this.service.salvar(this.cartao)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.cartao = response;
        },
          errorResponse => {
            console.log('errorResponse', errorResponse)
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }
}

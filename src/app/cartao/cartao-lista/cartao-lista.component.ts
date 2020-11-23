import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cartao } from '../cartao';
import { CartaoService } from '../cartao.service';

@Component({
  selector: 'app-cartao-lista',
  templateUrl: './cartao-lista.component.html',
  styleUrls: ['./cartao-lista.component.css']
})
export class CartaoListaComponent implements OnInit {

  cartoes: Cartao[] = [];
  cartaoSelecionado: Cartao;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private service: CartaoService
  ) { }

  ngOnInit(): void {
    this.service.listartodos()
      .subscribe(response => this.cartoes = response);
  }

  novoCadastro() {
    this.router.navigate(['/cartao/form']);
  }

  preparaDelecao(cartao: Cartao) {
    this.cartaoSelecionado = cartao;
  }

  deletarCartao() {
    this.service
      .deletar(this.cartaoSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = `Cartão ${this.cartaoSelecionado.nome} deletado com Sucesso!`
        this.ngOnInit();
      },
        erro => this.mensagemErro = 'Erro ao deletar cartão')
  }

}

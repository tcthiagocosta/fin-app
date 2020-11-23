import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaturaCartao } from '../faturaCartao';
import { FaturaCartaoService } from '../faturaCartao.service';

@Component({
  selector: 'app-faturaCartao-lista',
  templateUrl: './faturaCartao-lista.component.html',
  styleUrls: ['./faturaCartao-lista.component.css']
})
export class FaturaCartaoListaComponent implements OnInit {

  cartoes: FaturaCartao[] = [];
  faturaCartaoSelecionado: FaturaCartao;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private service: FaturaCartaoService
  ) { }

  ngOnInit(): void {
    this.service.listartodos()
      .subscribe(response => this.cartoes = response);
  }

  novoCadastro() {
    this.router.navigate(['/faturaCartao/form']);
  }

  preparaDelecao(faturaCartao: FaturaCartao) {
    this.faturaCartaoSelecionado = faturaCartao;
  }

  deletarFaturaCartao() {
    this.service
      .deletar(this.faturaCartaoSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = `Cartão ${this.faturaCartaoSelecionado.mes} deletado com Sucesso!`
        this.ngOnInit();
      },
        erro => this.mensagemErro = 'Erro ao deletar cartão')
  }

}

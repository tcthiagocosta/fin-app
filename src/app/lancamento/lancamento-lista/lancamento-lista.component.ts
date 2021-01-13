import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lancamento } from '../lancamento';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-lista',
  templateUrl: './lancamento-lista.component.html',
  styleUrls: ['./lancamento-lista.component.css']
})
export class LancamentoListaComponent implements OnInit {

  lancamentos: Lancamento[] = [];
  lancamentoSelecionado: Lancamento;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private service: LancamentoService
  ) { }

  ngOnInit(): void {
    this.service.listartodos().subscribe(response => this.lancamentos = response);
  }

  novoCadastro() {
    this.router.navigate(['/lancamento/form']);
  }

  preparaDelecao(lancamento: Lancamento) {
    this.lancamentoSelecionado = lancamento;
  }

  deletarCartao() {
    this.service
      .deletar(this.lancamentoSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = `Lançamento deletado com Sucesso!`
        this.ngOnInit();
      },
        erro => this.mensagemErro = 'Erro ao deletar Lançamento')
  }

}

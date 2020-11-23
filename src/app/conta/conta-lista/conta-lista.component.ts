import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from '../conta';
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta-lista',
  templateUrl: './conta-lista.component.html',
  styleUrls: ['./conta-lista.component.css']
})
export class ContaListaComponent implements OnInit {

  contas: Conta[] = [];
  contaSelecionado: Conta;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private service: ContaService
  ) { }

  ngOnInit(): void {
    this.service.listartodos()
      .subscribe(response => this.contas = response);
  }

  novoCadastro() {
    this.router.navigate(['/conta/form']);
  }

  preparaDelecao(conta: Conta) {
    this.contaSelecionado = conta;
  }

  deletarConta() {
    this.service
      .deletar(this.contaSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = `Conta ${this.contaSelecionado.nome} deletada com Sucesso!`
        this.ngOnInit();
      },
        erro => this.mensagemErro = 'Erro ao deletar conta')
  }

}

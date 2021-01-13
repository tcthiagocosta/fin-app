import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from '../transferencia.service';

@Component({
  selector: 'app-transferencia-lista',
  templateUrl: './transferencia-lista.component.html',
  styleUrls: ['./transferencia-lista.component.css']
})
export class TransferenciaListaComponent implements OnInit {

  transferencias : Transferencia[] = [];
  transferenciaSelecionado: Transferencia;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private service: TransferenciaService
  ) { }

  ngOnInit(): void {
    this.service.listartodos()
      .subscribe(response => this.transferencias = response);
  }

  novoCadastro() {
    this.router.navigate(['/transferencia/form']);
  }

  preparaDelecao(transferencia: Transferencia) {
    this.transferenciaSelecionado = transferencia;
  }

  deletarTransferencia() {
    this.service
      .deletar(this.transferenciaSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = `Transferência ${this.transferenciaSelecionado.descricao} deletado com Sucesso!`
        this.ngOnInit();
      },
        erro => this.mensagemErro = 'Erro ao deletar Transferência')
  }

}

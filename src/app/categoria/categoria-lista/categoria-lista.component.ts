import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  cartoes: Categoria[] = [];
  categoriaSelecionado: Categoria;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private service: CategoriaService
  ) { }

  ngOnInit(): void {
    this.service.listartodos()
      .subscribe(response => this.cartoes = response);
  }

  novoCadastro() {
    this.router.navigate(['/categoria/form']);
  }

  preparaDelecao(categoria: Categoria) {
    this.categoriaSelecionado = categoria;
  }

  deletarCategoria() {
    this.service
      .deletar(this.categoriaSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = `Cartão ${this.categoriaSelecionado.nome} deletado com Sucesso!`
        this.ngOnInit();
      },
        erro => this.mensagemErro = 'Erro ao deletar cartão')
  }

}

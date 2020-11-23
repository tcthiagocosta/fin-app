import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubCategoria } from '../subCategoria';
import { SubCategoriaService } from '../subCategoria.service';

@Component({
  selector: 'app-subCategoria-lista',
  templateUrl: './subCategoria-lista.component.html',
  styleUrls: ['./subCategoria-lista.component.css']
})
export class SubCategoriaListaComponent implements OnInit {

  cartoes: SubCategoria[] = [];
  subCategoriaSelecionado: SubCategoria;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private router: Router,
    private service: SubCategoriaService
  ) { }

  ngOnInit(): void {
    this.service.listartodos()
      .subscribe(response => this.cartoes = response);
  }

  novoCadastro() {
    this.router.navigate(['/subCategoria/form']);
  }

  preparaDelecao(subCategoria: SubCategoria) {
    this.subCategoriaSelecionado = subCategoria;
  }

  deletarSubCategoria() {
    this.service
      .deletar(this.subCategoriaSelecionado)
      .subscribe(response => {
        this.mensagemSucesso = `Cartão ${this.subCategoriaSelecionado.nome} deletado com Sucesso!`
        this.ngOnInit();
      },
        erro => this.mensagemErro = 'Erro ao deletar cartão')
  }

}

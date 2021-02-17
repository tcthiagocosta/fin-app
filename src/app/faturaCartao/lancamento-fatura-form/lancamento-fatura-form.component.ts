import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cartao } from 'src/app/cartao/cartao';
import { CartaoService } from 'src/app/cartao/cartao.service';
import { Categoria } from 'src/app/categoria/categoria';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubCategoria } from 'src/app/subCategoria/subCategoria';
import { SubCategoriaService } from 'src/app/subCategoria/subCategoria.service';
import { FaturaCartaoService } from '../faturaCartao.service';
import { LancamentoFaturaService } from '../lancamento-fatura.service';
import { LancamentoFatura } from '../lancamentoFatura';

@Component({
  selector: 'app-lancamento-fatura-form',
  templateUrl: './lancamento-fatura-form.component.html',
  styleUrls: ['./lancamento-fatura-form.component.css']
})
export class LancamentoFaturaFormComponent implements OnInit {

  lancamento: LancamentoFatura
  success: boolean = false;
  errors: any[];
  id: number;
  categorias: Categoria[] = [];
  idCategoriaSelecionada: number;
  subCategorias: SubCategoria[] = [];
  cartaoSelecionado: Cartao;
  cartoes : Cartao[] = []

  constructor(
    private router: Router,
    private faturaCartaoService: FaturaCartaoService,
    private activatedRoute: ActivatedRoute,
    private service: LancamentoFaturaService,
    private categoriaService: CategoriaService,
    private subCategoriaService: SubCategoriaService,
    private cartaoService: CartaoService
  ) {
    this.lancamento = new LancamentoFatura();
  }

  ngOnInit(): void {

    // carregando listas
    this.categoriaService.listartodos().subscribe(response => this.categorias = response);
    this.cartaoService.listartodos().subscribe(response => this.cartoes = response);

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getLancamentoFaturaId(this.id)
            .subscribe(
              response => {
                this.lancamento = response;
              },
              errorResponse => this.lancamento = new LancamentoFatura()
            )
        }
      }
    )
  }

  onSubmit() {
    console.log(this.lancamento);
    
      this.service.salvar(this.lancamento, this.cartaoSelecionado)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.lancamento = response;
        },
          errorResponse => {
            console.log('errorResponse', errorResponse)
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
 
  }

  voltarParaListagem() {
    this.router.navigate(['/faturaCartao/lista']);
  }

  selectCategoria(evento) {
    if (evento.target.value === '') {
      this.subCategorias = []
      return;
    }

    this.buscarSubCategorias()
    
  }

  buscarSubCategorias() {
    this.subCategoriaService
    .getSubCategoriaPorIdCategoria(this.idCategoriaSelecionada)
    .subscribe(response => {
      this.subCategorias = response
    })
  }

  dataAlterada(evento) {
    console.log('chegou');
    
    this.lancamento.data = evento.novaData;
  }

  valorAlterado(evento) {
    this.lancamento.valor = evento.novoValor;
  }


}

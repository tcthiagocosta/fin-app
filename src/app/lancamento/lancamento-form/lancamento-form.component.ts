import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/categoria/categoria';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Conta } from 'src/app/conta/conta';
import { ContaService } from 'src/app/conta/conta.service';
import { SubCategoria } from 'src/app/subCategoria/subCategoria';
import { SubCategoriaService } from 'src/app/subCategoria/subCategoria.service';
import { Lancamento } from '../lancamento';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css']
})
export class LancamentoFormComponent implements OnInit {

  lancamento: Lancamento
  success: boolean = false
  errors: any[]
  id: number
  categorias : Categoria[] = []
  idCategoriaSelecionara: number
  subCategorias : SubCategoria[] = []
  contas: Conta[] = []
  tipos: string[] = ['RECEITA', 'DESPESA']
  campoSelectPago: string

  constructor(
    private service: LancamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService,
    private subCategoriaService: SubCategoriaService,
    private contaService: ContaService
  ) { 
    this.lancamento = new Lancamento();
    this.lancamento.faturaCartao = null;
  }

  ngOnInit(): void {

    // carregando listas
    this.categoriaService.listartodos().subscribe(response => this.categorias = response);
    this.contaService.listartodos().subscribe(response => this.contas = response);

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getLancamentoId(this.id)
            .subscribe(
              response => this.lancamento = response,
              errorResponse => this.lancamento = new Lancamento()
            )
        }
      }
    )
  }

  voltarParaListagem() {
    this.router.navigate(['/lancamento/lista']);
  }

  onSubmit() {
    this.lancamento.pago = this.campoSelectPago === 'SIM' ? true : false;
    console.log(this.lancamento);
    
    if (this.id) {
      this.service.atualizar(this.lancamento)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar']
          });
    } else {
      this.service.salvar(this.lancamento)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.lancamento = response;
        },
          errorResponse => {
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }

  selectCategoria(evento) {
    if (evento.target.value === '') {
      this.subCategorias = []
      return;
    }

    this.subCategoriaService
    .getSubCategoriaPorIdCategoria(this.idCategoriaSelecionara)
    .subscribe(response => {
      this.subCategorias = response
    })
  }

  dataAlterada(evento) {
    this.lancamento.data = evento.novaData;
  }

  valorAlterado(evento) {
    console.log('cheogu');
    
    this.lancamento.valor = evento.novoValor;
  }

}
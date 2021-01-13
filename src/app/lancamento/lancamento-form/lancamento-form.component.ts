import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/categoria/categoria';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Conta } from 'src/app/conta/conta';
import { ContaService } from 'src/app/conta/conta.service';
import { SubCategoria } from 'src/app/subCategoria/subCategoria';
import { SubCategoriaService } from 'src/app/subCategoria/subCategoria.service';
import { LancamentoService } from '../lancamento.service';
import { LancamentoDTO } from '../lancamentoDTO';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css']
})
export class LancamentoFormComponent implements OnInit {

  lancamento: LancamentoDTO
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
    this.lancamento = new LancamentoDTO();
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
              response => {
                console.log(response);
                
                this.lancamento = response;
                this.idCategoriaSelecionara = this.lancamento.categoria.id;
                this.buscarSubCategorias();
              },
              errorResponse => this.lancamento = new LancamentoDTO()
            )
        }
      }
    )
  }

  voltarParaListagem() {
    this.router.navigate(['/lancamento/lista']);
  }

  onSubmit() {
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

    this.buscarSubCategorias()
    
  }

  buscarSubCategorias() {
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

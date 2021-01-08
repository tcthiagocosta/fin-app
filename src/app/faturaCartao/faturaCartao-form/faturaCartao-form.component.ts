import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cartao } from 'src/app/cartao/cartao';
import { CartaoService } from 'src/app/cartao/cartao.service';


import { FaturaCartao } from '../faturaCartao'
import { FaturaCartaoService } from '../faturaCartao.service';

@Component({
  selector: 'app-faturaCartao-form',
  templateUrl: './faturaCartao-form.component.html',
  styleUrls: ['./faturaCartao-form.component.css']
})
export class FaturaCartaoFormComponent implements OnInit {

  faturaCartao: FaturaCartao
  success: boolean = false
  errors: any[]
  id: number

  cartoes : Cartao[] = []

  dataInicial: string = '20/10/2020'

  meses: any[]
  

  constructor(
    private router: Router,
    private service: FaturaCartaoService,
    private activatedRoute: ActivatedRoute,
    private cartaoService: CartaoService
  ) {
    this.faturaCartao = new FaturaCartao()

    this.meses = [
      {id: 1, nome: "Janeiro"},
      {id: 2, nome: "Fevereiro"},
      {id: 3, nome: "Março"},
      {id: 4, nome: "Abril"},
      {id: 5, nome: "Maio"},
      {id: 6, nome: "Junho"},
      {id: 7, nome: "Julho"},
      {id: 8, nome: "Agosto"},
      {id: 9, nome: "Setembro"},
      {id: 10, nome: "Outubro"},
      {id: 11, nome: "Novembro"},
      {id: 12, nome: "Dezembro"}
    ]
  }

  ngOnInit(): void {

     // carregando listas
     this.cartaoService
     .listartodos()
     .subscribe(response => this.cartoes = response);

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getFaturaCartaoId(this.id)
            .subscribe(
              response => this.faturaCartao = response,
              errorResponse => this.faturaCartao = new FaturaCartao()
            )
        }
      }
    )
  }

  dataAlterada (evento) {
    this.faturaCartao.dataPagamento = evento.novaData
  }

  voltarParaListagem() {
    this.router.navigate(['/faturaCartao/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.faturaCartao)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar']
          });
    } else {
      this.service.salvar(this.faturaCartao)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.faturaCartao = response;
        },
          errorResponse => {
            console.log('errorResponse', errorResponse)
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/conta/conta';
import { ContaService } from 'src/app/conta/conta.service';
import { Transferencia } from '../transferencia';
import { TransferenciaService } from '../transferencia.service';



@Component({
  selector: 'app-transferencia-form',
  templateUrl: './transferencia-form.component.html',
  styleUrls: ['./transferencia-form.component.css']
})
export class TransferenciaFormComponent implements OnInit {

  transferencia: Transferencia
  success: boolean = false
  errors: any[]
  id: number
  contas: Conta[] = []

  constructor(
    private router: Router,
    private service: TransferenciaService,
    private activatedRoute: ActivatedRoute,
    private contaService: ContaService
  ) {
    this.transferencia = new Transferencia()
  }

  ngOnInit(): void {
    // carregando listas
    this.contaService.listartodos().subscribe(response => this.contas = response);

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getTransferenciaId(this.id)
            .subscribe(
              response => this.transferencia = response,
              errorResponse => this.transferencia = new Transferencia()
            )
        }
      }
    )
  }

  valorAlterado(evento) {
    this.transferencia.valor = evento.novoValor;
  }

  voltarParaListagem() {
    this.router.navigate(['/transferencia/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.transferencia)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar']
          });
    } else {
      this.service.salvar(this.transferencia)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.transferencia = response;
        },
          errorResponse => {
            console.log('errorResponse', errorResponse)
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }

  dataAlterada(evento) {
    this.transferencia.data = evento.novaData;
  }
}

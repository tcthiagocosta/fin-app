import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';


import { Conta } from '../conta'
import { ContaService } from '../conta.service';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css']
})
export class ContaFormComponent implements OnInit {

  conta: Conta
  success: boolean = false
  errors: string[]
  id: number

  constructor(
    private router: Router,
    private service: ContaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.conta = new Conta()
  }

  ngOnInit(): void {

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getContaId(this.id)
            .subscribe(
              response => this.conta = response,
              errorResponse => this.conta = new Conta()
            )
        }
      }
    )
  }

  voltarParaListagem() {
    this.router.navigate(['/conta/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.conta)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar']
          });
    } else {
      this.service.salvar(this.conta)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.conta = response;
        },
          errorResponse => {
            console.log('errorResponse', errorResponse)
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }
}

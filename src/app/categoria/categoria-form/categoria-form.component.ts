import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CampoDataComponent } from '../../componentes/campo-data/campo-data.component'


import { Categoria } from '../categoria'
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit {

  categoria: Categoria
  success: boolean = false
  errors: string[]
  id: number

  constructor(
    private router: Router,
    private service: CategoriaService,
    private activatedRoute: ActivatedRoute
  ) {
    this.categoria = new Categoria()
  }

  ngOnInit(): void {

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getCategoriaId(this.id)
            .subscribe(
              response => this.categoria = response,
              errorResponse => this.categoria = new Categoria()
            )
        }
      }
    )
  }

  voltarParaListagem() {
    this.router.navigate(['/categoria/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.categoria)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar']
          });
    } else {
      this.service.salvar(this.categoria)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.categoria = response;
        },
          errorResponse => {
            console.log('errorResponse', errorResponse)
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }
}

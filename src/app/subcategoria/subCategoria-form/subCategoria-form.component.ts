import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/categoria/categoria';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubCategoria } from '../subCategoria';
import { SubCategoriaService } from '../subCategoria.service';



@Component({
  selector: 'app-subCategoria-form',
  templateUrl: './subCategoria-form.component.html',
  styleUrls: ['./subCategoria-form.component.css']
})
export class SubCategoriaFormComponent implements OnInit {

  subCategoria: SubCategoria
  success: boolean = false
  errors: any[]
  id: number

  categorias : Categoria[] = []

  constructor(
    private router: Router,
    private service: SubCategoriaService,
    private activatedRoute: ActivatedRoute,
    private categoriaService: CategoriaService
  ) {
    this.subCategoria = new SubCategoria()
  }

  ngOnInit(): void {

     // carregando listas
     this.categoriaService
     .listartodos()
     .subscribe(response => this.categorias = response);

    // verifica se foi passado no link o id de um usuario para editar
    let params: Observable<Params> = this.activatedRoute.params;

    params.subscribe(
      urlParams => {
        this.id = urlParams['id']
        if (this.id) {
          this.service
            .getSubCategoriaId(this.id)
            .subscribe(
              response => this.subCategoria = response,
              errorResponse => this.subCategoria = new SubCategoria()
            )
        }
      }
    )
  }

  voltarParaListagem() {
    this.router.navigate(['/subCategoria/lista']);
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.subCategoria)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
        },
          errorResponse => {
            this.success = false;
            this.errors = ['Erro ao atualizar']
          });
    } else {
      this.service.salvar(this.subCategoria)
        .subscribe(response => {
          this.success = true;
          this.errors = null;
          this.subCategoria = response;
        },
          errorResponse => {
            console.log('errorResponse', errorResponse)
            this.success = false;
            this.errors = errorResponse.error.errors;
          });
    }
  }
}

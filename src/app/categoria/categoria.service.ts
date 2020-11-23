import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlBaseCategoria : string = environment.apiURLBase + '/api/categoria'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(categoria: Categoria): Observable<any> {    
    return this.http.post<any>(this.urlBaseCategoria, categoria);    
  }
 
  deletar(categoria: Categoria): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseCategoria}/${categoria.id}`);
  }

  listartodos() : Observable<Categoria[]> {        
    return this.http.get<Categoria[]>(this.urlBaseCategoria);
  }

  getCategoriaId(id: number) : Observable<Categoria> {
    return this.http.get<Categoria>(`${this.urlBaseCategoria}/${id}`);
  }

  atualizar(categoria: Categoria): Observable<any> {
    return this.http.put<Categoria>(`${this.urlBaseCategoria}/${categoria.id}`, categoria);
  }
}

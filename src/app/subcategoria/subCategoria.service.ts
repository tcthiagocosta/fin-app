import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubCategoria } from './subCategoria';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriaService {

  urlBaseSubCategoria : string = environment.apiURLBase + '/api/subCategoria'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(subCategoria: SubCategoria): Observable<any> {    
    return this.http.post<any>(this.urlBaseSubCategoria, subCategoria);    
  }
 
  deletar(subCategoria: SubCategoria): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseSubCategoria}/${subCategoria.id}`);
  }

  listartodos() : Observable<SubCategoria[]> {        
    return this.http.get<SubCategoria[]>(this.urlBaseSubCategoria);
  }

  getSubCategoriaId(id: number) : Observable<SubCategoria> {
    return this.http.get<SubCategoria>(`${this.urlBaseSubCategoria}/${id}`);
  }

  atualizar(subCategoria: SubCategoria): Observable<any> {
    return this.http.put<SubCategoria>(`${this.urlBaseSubCategoria}/${subCategoria.id}`, subCategoria);
  }

  getSubCategoriaPorIdCategoria(id: number) : Observable<SubCategoria[]> {
    return this.http.get<SubCategoria[]>(`${this.urlBaseSubCategoria}/categoria/${id}`);
  }
}

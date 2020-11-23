import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cartao } from './cartao'

@Injectable({
  providedIn: 'root'
})
export class CartaoService {

  urlBaseCartao : string = environment.apiURLBase + '/api/cartao'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(cartao: Cartao): Observable<any> {    
    return this.http.post<any>(this.urlBaseCartao, cartao);    
  }
 
  deletar(cartao: Cartao): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseCartao}/${cartao.id}`);
  }

  listartodos() : Observable<Cartao[]> {        
    return this.http.get<Cartao[]>(this.urlBaseCartao);
  }

  getCartaoId(id: number) : Observable<Cartao> {
    return this.http.get<Cartao>(`${this.urlBaseCartao}/${id}`);
  }

  atualizar(cartao: Cartao): Observable<any> {
    return this.http.put<Cartao>(`${this.urlBaseCartao}/${cartao.id}`, cartao);
  }
}

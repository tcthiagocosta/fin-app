import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conta } from './conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  urlBaseConta : string = environment.apiURLBase + '/api/conta'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(conta: Conta): Observable<any> {    
    return this.http.post<any>(this.urlBaseConta, conta);    
  }
 
  deletar(conta: Conta): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseConta}/${conta.id}`);
  }

  listartodos() : Observable<Conta[]> {        
    return this.http.get<Conta[]>(this.urlBaseConta);
  }

  getContaId(id: number) : Observable<Conta> {
    return this.http.get<Conta>(`${this.urlBaseConta}/${id}`);
  }

  atualizar(conta: Conta): Observable<any> {
    return this.http.put<Conta>(`${this.urlBaseConta}/${conta.id}`, conta);
  }
}

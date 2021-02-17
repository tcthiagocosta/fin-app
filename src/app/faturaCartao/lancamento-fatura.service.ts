import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cartao } from '../cartao/cartao';
import { LancamentoFatura } from './lancamentoFatura';

@Injectable({
  providedIn: 'root'
})
export class LancamentoFaturaService {

  urlBaseLancamentoFatura : string = environment.apiURLBase + '/api/lancamentoFatura'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(lancamentoFatura: LancamentoFatura, cartao: Cartao): Observable<any> { 
    const body = {
      lancamentoFatura: lancamentoFatura,
      cartao: cartao
    }
        
    return this.http.post<any>(this.urlBaseLancamentoFatura, body);    
  }
 
  deletar(lancamentoFatura: LancamentoFatura): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseLancamentoFatura}/${lancamentoFatura.id}`);
  }

  listartodos() : Observable<LancamentoFatura[]> {        
    return this.http.get<LancamentoFatura[]>(this.urlBaseLancamentoFatura);
  }

  getLancamentoFaturaId(id: number) : Observable<LancamentoFatura> {
    return this.http.get<LancamentoFatura>(`${this.urlBaseLancamentoFatura}/${id}`);
  }

  atualizar(lancamentoFatura: LancamentoFatura): Observable<any> {
    return this.http.put<LancamentoFatura>(`${this.urlBaseLancamentoFatura}/${lancamentoFatura.id}`, lancamentoFatura);
  }
}


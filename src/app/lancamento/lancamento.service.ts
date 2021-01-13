import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lancamento } from './lancamento';
import { LancamentoDTO } from './lancamentoDTO';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  urlBaseLancamento : string = environment.apiURLBase + '/api/lancamento'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(lancamento: LancamentoDTO): Observable<any> {    
    return this.http.post<any>(this.urlBaseLancamento, lancamento);    
  }
 
  deletar(lancamento: Lancamento): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseLancamento}/${lancamento.id}`);
  }

  listartodos() : Observable<Lancamento[]> {        
    return this.http.get<Lancamento[]>(this.urlBaseLancamento);
  }

  getLancamentoId(id: number) : Observable<LancamentoDTO> {
    return this.http.get<LancamentoDTO>(`${this.urlBaseLancamento}/${id}`);
  }

  atualizar(lancamento: LancamentoDTO): Observable<any> {
    return this.http.put<LancamentoDTO>(`${this.urlBaseLancamento}/${lancamento.id}`, lancamento);
  }
}

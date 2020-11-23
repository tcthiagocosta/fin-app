import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FaturaCartao } from './faturaCartao'

@Injectable({
  providedIn: 'root'
})
export class FaturaCartaoService {

  urlBaseFaturaCartao : string = environment.apiURLBase + '/api/faturaCartao'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(faturaCartao: FaturaCartao): Observable<any> {    
    return this.http.post<any>(this.urlBaseFaturaCartao, faturaCartao);    
  }
 
  deletar(faturaCartao: FaturaCartao): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseFaturaCartao}/${faturaCartao.id}`);
  }

  listartodos() : Observable<FaturaCartao[]> {        
    return this.http.get<FaturaCartao[]>(this.urlBaseFaturaCartao);
  }

  getFaturaCartaoId(id: number) : Observable<FaturaCartao> {
    return this.http.get<FaturaCartao>(`${this.urlBaseFaturaCartao}/${id}`);
  }

  atualizar(faturaCartao: FaturaCartao): Observable<any> {
    return this.http.put<FaturaCartao>(`${this.urlBaseFaturaCartao}/${faturaCartao.id}`, faturaCartao);
  }
}

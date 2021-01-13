import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transferencia } from './transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  urlBaseTransferencia : string = environment.apiURLBase + '/api/transferencia'

  constructor(
    private http: HttpClient   
  ) { }

  salvar(transferencia: Transferencia): Observable<any> {    
    return this.http.post<any>(this.urlBaseTransferencia, transferencia);    
  }
 
  deletar(transferencia: Transferencia): Observable<any> {
    return this.http.delete<any>(`${this.urlBaseTransferencia}/${transferencia.id}`);
  }

  listartodos() : Observable<Transferencia[]> {        
    return this.http.get<Transferencia[]>(this.urlBaseTransferencia);
  }

  getTransferenciaId(id: number) : Observable<Transferencia> {
    return this.http.get<Transferencia>(`${this.urlBaseTransferencia}/${id}`);
  }

  atualizar(transferencia: Transferencia): Observable<any> {
    return this.http.put<Transferencia>(`${this.urlBaseTransferencia}/${transferencia.id}`, transferencia);
  }
}

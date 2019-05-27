import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PrevMeasures } from '../classes/prev-measures';

@Injectable({
  providedIn: 'root'
})
export class PreventativeMeasuresApiService {

  url = 'http://localhost:54326/api/Preventitive';
  constructor(private http: HttpClient) { }
  getAllPreventitive(): Observable<PrevMeasures[]> {
    return this.http.get<PrevMeasures[]>(this.url + '/GetAllPreventitives');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addPreventitive(cause: PrevMeasures): Observable<PrevMeasures> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<PrevMeasures>(this.url + '/InsertPreventitive/', cause, httpOptions);
  }
  updatePreventitve(cause: PrevMeasures): Observable<PrevMeasures> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<PrevMeasures>(this.url + '/UpdatePreventitive/', cause, httpOptions);
  }
  deletePreventitve(cause: PrevMeasures): Observable<PrevMeasures> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<PrevMeasures>(this.url + '/DeletePreventitve/', cause, httpOptions);
  }
}

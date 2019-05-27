import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cause } from '../classes/cause';


@Injectable({
  providedIn: 'root'
})
export class CausesApiService {

  url = 'http://localhost:54326/api/cause';
  constructor(private http: HttpClient) { }
  getAllCause(): Observable<Cause[]> {
    return this.http.get<Cause[]>(this.url + '/AllCauseDetails');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addCause(cause: Cause): Observable<Cause> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Cause>(this.url + '/InsertCause/', cause, httpOptions);
  }
  updateCause(cause: Cause): Observable<Cause> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Cause>(this.url + '/UpdateCause/', cause, httpOptions);
  }
  deleteCause(cause: Cause): Observable<Cause> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Cause>(this.url + '/DeleteCause/', cause, httpOptions);
  }
}

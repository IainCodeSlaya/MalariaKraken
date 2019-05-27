import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Risk } from '../classes/risk';

@Injectable({
  providedIn: 'root'
})
export class RiskApiService {

  url = 'http://localhost:54326/api/Risk';
  constructor(private http: HttpClient) { }
  getAllRisks(): Observable<Risk[]> {
    return this.http.get<Risk[]>(this.url + '/AllRisks');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addRisk(cause: Risk): Observable<Risk> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Risk>(this.url + '/InsertRisk/', cause, httpOptions);
  }
  updateRisk(cause: Risk): Observable<Risk> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Risk>(this.url + '/UpdateRisk/', cause, httpOptions);
  }
  deleteRisk(cause: Risk): Observable<Risk> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Risk>(this.url + '/DeleteRisk/', cause, httpOptions);
  }
}

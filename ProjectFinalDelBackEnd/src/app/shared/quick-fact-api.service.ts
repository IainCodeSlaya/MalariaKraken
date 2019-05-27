import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { QuickFact } from '../classes/quick-fact';

@Injectable({
  providedIn: 'root'
})
export class QuickFactApiService {

  url = 'http://localhost:54326/api/QuickFact';
  constructor(private http: HttpClient) { }
  getAllQuickFact(): Observable<QuickFact[]> {
    return this.http.get<QuickFact[]>(this.url + '/GetAllQuickFactDetails');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addQuickFact(cause: QuickFact): Observable<QuickFact> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<QuickFact>(this.url + '/InsertQuickFact/', cause, httpOptions);
  }
  updateQuickFact(cause: QuickFact): Observable<QuickFact> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<QuickFact>(this.url + '/UpdateQuickFact/', cause, httpOptions);
  }
  deleteQuickFact(cause: QuickFact): Observable<QuickFact> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<QuickFact>(this.url + '/DeleteQuickFact/', cause, httpOptions);
  }
}

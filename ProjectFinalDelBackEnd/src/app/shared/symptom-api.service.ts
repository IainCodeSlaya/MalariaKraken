import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Symptom } from '../classes/symptom';

@Injectable({
  providedIn: 'root'
})
export class SymptomApiService {

  url = 'http://localhost:54326/api/Symptom';
  constructor(private http: HttpClient) { }
  getAllRisk(): Observable<Symptom[]> {
    return this.http.get<Symptom[]>(this.url + '/GetAllSymptomDetails');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addSymptom(cause: Symptom): Observable<Symptom> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Symptom>(this.url + '/InsertSymptom/', cause, httpOptions);
  }
  updateSymptom(cause: Symptom): Observable<Symptom> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Symptom>(this.url + '/UpdateSymptom/', cause, httpOptions);
  }
  deleteSymptom(cause: Symptom): Observable<Symptom> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Symptom>(this.url + '/DeleteSymptom/', cause, httpOptions);
  }
}

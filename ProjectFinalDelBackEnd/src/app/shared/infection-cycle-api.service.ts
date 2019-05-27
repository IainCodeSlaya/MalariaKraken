import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { InfectionCycle } from '../classes/infection-cycle';

@Injectable({
  providedIn: 'root'
})
export class InfectionCycleApiService {

  url = 'http://localhost:54326/api/Cycle';
  constructor(private http: HttpClient) { }
  getAllCycle(): Observable<InfectionCycle[]> {
    return this.http.get<InfectionCycle[]>(this.url + '/AllCycleDetails');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addCycle(cause: InfectionCycle): Observable<InfectionCycle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<InfectionCycle>(this.url + '/InsertCycle/', cause, httpOptions);
  }
  updateCycle(cause: InfectionCycle): Observable<InfectionCycle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<InfectionCycle>(this.url + '/UpdateCycle/', cause, httpOptions);
  }
  deleteCycle(cause: InfectionCycle): Observable<InfectionCycle> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<InfectionCycle>(this.url + '/DeleteCycle/', cause, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { MalariaType } from '../classes/malaria-type';

@Injectable({
  providedIn: 'root'
})
export class MalariaTypeApiService {

  url = 'http://localhost:54326/api/MalariaType';
  constructor(private http: HttpClient) { }
  getAllMalariaType(): Observable<MalariaType[]> {
    return this.http.get<MalariaType[]>(this.url + '/AllMalariaTypeDetails');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addMalariaType(cause: MalariaType): Observable<MalariaType> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<MalariaType>(this.url + '/InsertMalariaType/', cause, httpOptions);
  }
  updateCycle(cause: MalariaType): Observable<MalariaType> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<MalariaType>(this.url + '/UpdateMalariaType/', cause, httpOptions);
  }
  deleteCycle(cause: MalariaType): Observable<MalariaType> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<MalariaType>(this.url + '/DeleteMalariaType/', cause, httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Vaccination } from '../classes/vaccination';

@Injectable({
  providedIn: 'root'
})
export class VaccinationApiService {

  url = 'http://localhost:54326/api/Vaccination';
  constructor(private http: HttpClient) { }
  getAllVaccination(): Observable<Vaccination[]> {
    return this.http.get<Vaccination[]>(this.url + '/AllVaccinationDetails');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addVaccination(cause: Vaccination): Observable<Vaccination> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Vaccination>(this.url + '/InsertVaccination/', cause, httpOptions);
  }
  updateVaccination(cause: Vaccination): Observable<Vaccination> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Vaccination>(this.url + '/UpdateVaccination/', cause, httpOptions);
  }
  deleteVaccination(cause: Vaccination): Observable<Vaccination> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Vaccination>(this.url + '/DeleteVaccination/', cause, httpOptions);
  }
}

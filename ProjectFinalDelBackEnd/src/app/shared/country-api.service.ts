import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from '../classes/country';


@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  url = 'http://localhost:54326/api/Country';
  constructor(private http: HttpClient) { }
  getAllCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.url + '/AllCountryDetails');
  }
  /*getCauseId(causeId:number):Observable<Cause[]>{
    return this.http.get<Cause>(this.url + '/GetCauseId/' + causeId);
  }*/
  addCountry(cause: Country): Observable<Country> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Country>(this.url + '/InsertCountry/', cause, httpOptions);
  }
  updateCountry(cause: Country): Observable<Country> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Country>(this.url + '/UpdateCountry/', cause, httpOptions);
  }
  deleteCountry(cause: Country): Observable<Country> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put<Country>(this.url + '/DeleteCountry/', cause, httpOptions);
  }
}
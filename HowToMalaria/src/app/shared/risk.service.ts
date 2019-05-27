import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Risk } from './risk';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = '/api/Risk';

@Injectable({
  providedIn: 'root'
})
export class RiskService {
  list: Risk[];

  readonly rootURL = 'https://localhost:5/api';

  refreshRisk() {
    this.http.get(this.rootURL + '/Risk').toPromise().then(res => this.list = res as Risk[]);
  }

constructor(private http: HttpClient) { }
}

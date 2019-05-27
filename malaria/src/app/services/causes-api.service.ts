import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Cause } from '../causes/causes/cause';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:54326/api/'; //enter api URL

@Injectable({
  providedIn: 'root'
})
export class CausesApiService {

  constructor(private http: HttpClient) {

  }

  //errorHandler
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  //CRUD
  getAllCause(): Observable<Cause[]> {
    return this.http.get<Cause[]>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Causes')),
        catchError(this.handleError('getAllCause', []))
      );
  }

  getCauseList(id: number): Observable<Cause> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Cause>(url).pipe(
      tap(_ => console.log(`fetched Cause id=${id}`)),
      catchError(this.handleError<Cause>(`getCauseList id=${id}`))
    );
  }

  addCause(cause: any): Observable<Cause> {
    return this.http.post<Cause>(apiUrl, cause, httpOptions).pipe(
      tap((causeRes: Cause) => console.log(`added Cause w/ id=${causeRes.causeId}`)),
      catchError(this.handleError<Cause>('addCause'))
    );
  }

  updateCause(id: number, cause: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, cause, httpOptions).pipe(
      tap(_ => console.log(`updated Cause id=${id}`)),
      catchError(this.handleError<any>('updateCause'))
    );
  }

  deleteCause(id: number): Observable<Cause> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<Cause>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Cause id=${id}`)),
      catchError(this.handleError<Cause>('deleteCause'))
    );
  }
}

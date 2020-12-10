import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Actualitee } from '../models/actualitee';
import { ErrorLogServive } from '../services/error-log.service';


@Injectable({ providedIn: 'root' })
export class ActualiteeService {

  private actualiteesUrl = 'api/actualiteees';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private logs: ErrorLogServive) { }

  getActualitees(): Observable<Actualitee[]> {
    return this.http.get<Actualitee[]>(this.actualiteesUrl)
      .pipe(
        catchError(this.handleError<Actualitee[]>('getActualitees', []))
      );
  }

  /** GET actualitee by id. Return `undefined` when id not found */
  getActualiteeNo404<Data>(id: number): Observable<Actualitee> {
    const url = `${this.actualiteesUrl}/?id=${id}`;
    return this.http.get<Actualitee[]>(url)
      .pipe(
        map(actualiteees => actualiteees[0]), // returns a {0|1} element array
        catchError(this.handleError<Actualitee>(`getActualitee id=${id}`))
      );
  }

  /** GET actualitee by id. Will 404 if id not found */
  getActualitee(id: number): Observable<Actualitee> {
    const url = `${this.actualiteesUrl}/${id}`;
    return this.http.get<Actualitee>(url).pipe(
      catchError(this.handleError<Actualitee>(`getActualitee id=${id}`))
    );
  }

  /* GET actualiteees whose name contains search term */
  searchActualitees(term: string): Observable<Actualitee[]> {
    if (!term.trim()) {
      // if not search term, return empty actualitee array.
      return of([]);
    }
    return this.http.get<Actualitee[]>(`${this.actualiteesUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Actualitee[]>('searchActualitees', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new actualitee to the server */
  addActualitee(actualitee: Actualitee): Observable<Actualitee> {
    return this.http.post<Actualitee>(this.actualiteesUrl, actualitee, this.httpOptions).pipe(
      catchError(this.handleError<Actualitee>('addActualitee'))
    );
  }

  /** DELETE: delete the actualitee from the server */
  deleteActualitee(actualitee: Actualitee | number): Observable<Actualitee> {
    const id = typeof actualitee === 'number' ? actualitee : actualitee.id;
    const url = `${this.actualiteesUrl}/${id}`;

    return this.http.delete<Actualitee>(url, this.httpOptions).pipe(
      catchError(this.handleError<Actualitee>('deleteActualitee'))
    );
  }

  /** PUT: update the actualitee on the server */
  updateActualitee(actualitee: Actualitee): Observable<any> {
    return this.http.put(this.actualiteesUrl, actualitee, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateActualitee'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ActualiteeService message with the MessageService */
  private log(message: string) {
   // this.logs.add(`ActualiteeService: ${message}`);
  }
}

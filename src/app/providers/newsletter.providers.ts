import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Newsletter } from '../models/newsletter';
import { ErrorLogServive } from '../services/error-log.service';


@Injectable({ providedIn: 'root' })
export class NewsletterService {

  private newslettersUrl = 'api/newsletters';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private logs: ErrorLogServive) { }

  getNewsletters(): Observable<Newsletter[]> {
    return this.http.get<Newsletter[]>(this.newslettersUrl)
      .pipe(
        catchError(this.handleError<Newsletter[]>('getNewsletters', []))
      );
  }

  /** GET newsletter by id. Return `undefined` when id not found */
  getNewsletterNo404<Data>(id: number): Observable<Newsletter> {
    const url = `${this.newslettersUrl}/?id=${id}`;
    return this.http.get<Newsletter[]>(url)
      .pipe(
        map(newsletters => newsletters[0]), // returns a {0|1} element array
        catchError(this.handleError<Newsletter>(`getNewsletter id=${id}`))
      );
  }

  /** GET newsletter by id. Will 404 if id not found */
  getNewsletter(id: number): Observable<Newsletter> {
    const url = `${this.newslettersUrl}/${id}`;
    return this.http.get<Newsletter>(url).pipe(
      catchError(this.handleError<Newsletter>(`getNewsletter id=${id}`))
    );
  }

  /* GET newsletters whose name contains search term */
  searchNewsletters(term: string): Observable<Newsletter[]> {
    if (!term.trim()) {
      // if not search term, return empty newsletter array.
      return of([]);
    }
    return this.http.get<Newsletter[]>(`${this.newslettersUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Newsletter[]>('searchNewsletters', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new newsletter to the server */
  addNewsletter(newsletter: Newsletter): Observable<Newsletter> {
    return this.http.post<Newsletter>(this.newslettersUrl, newsletter, this.httpOptions).pipe(
      catchError(this.handleError<Newsletter>('addNewsletter'))
    );
  }

  /** DELETE: delete the newsletter from the server */
  deleteNewsletter(newsletter: Newsletter | number): Observable<Newsletter> {
    const id = typeof newsletter === 'number' ? newsletter : newsletter.id;
    const url = `${this.newslettersUrl}/${id}`;

    return this.http.delete<Newsletter>(url, this.httpOptions).pipe(
      catchError(this.handleError<Newsletter>('deleteNewsletter'))
    );
  }

  /** PUT: update the newsletter on the server */
  updateNewsletter(newsletter: Newsletter): Observable<any> {
    return this.http.put(this.newslettersUrl, newsletter, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateNewsletter'))
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

  /** Log a NewsletterService message with the MessageService */
  private log(message: string) {
    // this.logs.add(`NewsletterService: ${message}`);
  }
}

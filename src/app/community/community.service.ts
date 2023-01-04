import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Community } from './community.model';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private apiURL = "http://localhost:8000/api/community/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  /*------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
  /*------------------------------------------*/
  getAll(): Observable<Community[]> {
    return this.httpClient.get<Community[]>(this.apiURL).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  find(id: number): Observable<Community> {
    return this.httpClient.get<Community>(this.apiURL + id).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  delete(id: number) {
    return this.httpClient.delete<Community>(this.apiURL + id, this.httpOptions).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  create(newCommunity: Community): Observable<Community> {
    return this.httpClient.post<Community>(this.apiURL, JSON.stringify(newCommunity), this.httpOptions).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  update(id: number, updatedCommunity: Community): Observable<Community> {
    return this.httpClient.put<Community>(this.apiURL + id, JSON.stringify(updatedCommunity), this.httpOptions).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  /*------------------------------------------*/
}

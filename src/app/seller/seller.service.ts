import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Seller } from './seller';

@Injectable({
  providedIn: 'root'
})

export class SellerService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private apiURL = "http://localhost:8000/api/seller/";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Seller[]> {
    return this.httpClient.get<Seller[]>(this.apiURL).pipe(catchError(this.errorHandler));
  }

  find(id: number): Observable<Seller> {
    return this.httpClient.get<Seller>(this.apiURL + id).pipe(catchError(this.errorHandler));
  }

  delete(id: number) {
    return this.httpClient.delete<Seller>(this.apiURL + id, this.httpOptions).pipe(catchError(this.errorHandler));
  }

  update(id: number, updatedSeller: Seller): Observable<Seller> {
    return this.httpClient.put<Seller>(this.apiURL + id, JSON.stringify(updatedSeller), this.httpOptions).pipe(catchError(this.errorHandler));
  }

  create(newSeller: Seller): Observable<Seller> {
    return this.httpClient.post<Seller>(this.apiURL, JSON.stringify(newSeller), this.httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

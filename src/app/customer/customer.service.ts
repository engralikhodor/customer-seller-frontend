import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private apiURL = "http://localhost:8000/api/customer/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /*------------------------------------------*/
  constructor(private httpClient: HttpClient) { }
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
  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiURL)
      .pipe(catchError(this.errorHandler))
  }
  /*------------------------------------------*/
  find(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.apiURL + id)
      .pipe(catchError(this.errorHandler))
  }
  /*------------------------------------------*/
  //will point to backend/routes/api.php@Route::post -> CustomerController.php@create(Request $request)
  create(newCustomer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiURL, JSON.stringify(newCustomer), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }
  /*------------------------------------------*/
  //will point to backend/routes/api.php@Route::put -> CustomerController.php@update(Request $request, $id)
  update(id: number, updatedCustomer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.apiURL + id, JSON.stringify(updatedCustomer), this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }
  /*------------------------------------------*/
  //will point to backend/routes/api.php@Route::delete -> CustomerController.php@delete($id)
  delete(id: number) {
    return this.httpClient.delete<Customer>(this.apiURL + id, this.httpOptions)
      .pipe(catchError(this.errorHandler))
  }
  /*------------------------------------------*/


}

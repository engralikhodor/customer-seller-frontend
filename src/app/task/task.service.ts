import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = "http://localhost:8000/api/task/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpclient: HttpClient) { }

  /*------------------------------------------*/
  getAll(): Observable<Task[]> {
    return this.httpclient.get<Task[]>(this.apiURL).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  find(id: number): Observable<Task> {
    return this.httpclient.get<Task>(this.apiURL + id).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  //will point to backend/routes/api.php@Route::delete -> TaskController.php@delete($id)
  delete(id: number) {
    return this.httpclient.delete<Task>(this.apiURL + id, this.httpOptions).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  //will point to backend/routes/api.php@Route::post -> TaskController.php@create(Request $request)
  create(newTask: Task): Observable<Task> {
    return this.httpclient.post<Task>(this.apiURL, JSON.stringify(newTask), this.httpOptions).pipe(catchError(this.errorHandler));
  }
  /*------------------------------------------*/
  //will point to backend/routes/api.php@Route::put -> TaskController.php@update(Request $request, $id)
  update(id: number, updatedTask: Task): Observable<Task> {
    return this.httpclient.put<Task>(this.apiURL + id, JSON.stringify(updatedTask), this.httpOptions).pipe(catchError(this.errorHandler));
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

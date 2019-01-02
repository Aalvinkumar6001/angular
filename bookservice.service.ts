import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

//import { Observable } from 'rxjs/Observable';
import { IBooks } from './bookmodel';
import { Observable, config } from 'rxjs';
import { Book } from './Book';
import { Subject } from './Subject';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  private baseUrl = 'http://localhost:8080/api/book';
  constructor( private http:HttpClient) { }
  getBooks(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }
  
  getBooksById(userId): Observable<Book>{
    return this.http.get<Book>(`${this.baseUrl}` + `/search/`+userId );
  }
  // getBooksById(id): Observable<IBooks[]>{
  //   return this.http.get<IBooks[]>("https://jsonplaceholder.typicode.com/posts/"id+);
  // }
 
 
  updatebook(userId,book: Book) : Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/update/`+userId, book);
}
  addbook(book: Book) : Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, book);
}
addsubject(subject: Subject) : Observable<any> {
  console.log("Data being passed to java");
  console.log(subject);
  return this.http.post(`${this.baseUrl}` + `/subject/create`, subject);
}
getSubjects(): Observable<any>{
  return this.http.get<any>(`${this.baseUrl}`+ `/subject`);
}

deletebook(userId): Observable<any> {
  return this.http.delete(`${this.baseUrl}` + `/delete/`+userId , { responseType: 'text' });
}
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BasicsService {
  private apiUrl = 'https://localhost:5001/api/basics'; // Adjust port as needed

  constructor(private http: HttpClient) {}

  sayHello(): Observable<string> {
    return this.http.get(this.apiUrl + '/hello', { responseType: 'text' });
  }

  getUserInfo(): Observable<any> {
    return this.http.get(this.apiUrl + '/userinfo');
  }

  checkEvenOdd(number: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/evenodd/${number}`);
  }

  calculate(a: number, b: number, op: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/calculate?a=${a}&b=${b}&op=${op}`);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/books');
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(this.apiUrl + '/books', book);
  }
}

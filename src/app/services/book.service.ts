import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }
  baseurl = 'http://localhost:8080'

  search(searchValue: string) {
    const token= localStorage.getItem('AuthToken') || '';
    return this.http.get(`${this.baseurl}/api/books/search?searchValue=${searchValue}`, { headers: { Authorization: token } });
  }

  details(bookId: string) {
    const token= localStorage.getItem('AuthToken') || '';
    return this.http.get(`${this.baseurl}/api/books/details/${bookId}`, { headers: { Authorization: token } });
  }
}

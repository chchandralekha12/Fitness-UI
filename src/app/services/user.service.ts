import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  baseurl = 'http://localhost:8080'

  register(userData: any) {
    return this.http.post(`${this.baseurl}/api/users/register`, userData);
  }

  login(loginData: any) {
    return this.http.post(`${this.baseurl}/api/users/login`, loginData);
  }
}

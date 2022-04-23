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

  changePassword(oldPassword: string, newPassword: string) {
    const token= localStorage.getItem('AuthToken') || '';
    return this.http.put(`${this.baseurl}/api/users/change-password`, { newPassword, oldPassword },  { headers: { Authorization: token } });
  }

  getSubscription() {
    const token= localStorage.getItem('AuthToken') || '';
    return this.http.get(`${this.baseurl}/api/users/get-subscription`,  { headers: { Authorization: token } });
  } 

  addSubscription(subscription: number) {
    const token= localStorage.getItem('AuthToken') || '';
    return this.http.put(`${this.baseurl}/api/users/add-subscription`, { subscription },  { headers: { Authorization: token } });
  } 

  cancelSubscription() {
    const token= localStorage.getItem('AuthToken') || '';
    return this.http.put(`${this.baseurl}/api/users/cancel-subscription`, {},  { headers: { Authorization: token } });
  } 
}

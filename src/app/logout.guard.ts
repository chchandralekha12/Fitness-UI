import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {
  constructor(
    private router: Router
  ) {

  }
  canActivate(){
    const token = localStorage.getItem('AuthToken');
    if(!token) {
      return true;
    }
    this.router.navigate(['/user']);
    return false;
  }
  
}

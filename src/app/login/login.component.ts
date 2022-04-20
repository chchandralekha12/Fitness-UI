import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
  errorMessage = '';

  loginData = {
    email: '',
    password: ''
  }

  login() {
    this.userService.login(this.loginData).subscribe((response) => {
      const successResponse = JSON.parse(JSON.stringify(response));
      localStorage.setItem('AuthToken', successResponse.data.token);
      localStorage.setItem('Email', this.loginData.email);
      this.router.navigate(['/user']);
    }, (errorResponse) => {
      console.log(errorResponse.error);
      this.errorMessage = errorResponse.error.error.message;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  errorMessage = '';

  ngOnInit(): void {
  }

  userData = {
    fullName: '',
    email: '',
    password: ''
  }

  register() {
    this.userService.register(this.userData).subscribe(response => {
      const successResponse = JSON.parse(JSON.stringify(response));
      localStorage.setItem('AuthToken', successResponse.data.token);
      this.router.navigate(['/user']);
    }, (errorResponse) => {
      console.log(errorResponse.error);
      this.errorMessage = errorResponse.error.error.message;
    });
  }

}

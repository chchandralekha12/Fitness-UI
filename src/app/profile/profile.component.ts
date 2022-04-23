import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  trainers = [
    {
      name: '',
      experience: ''
    }
  ]

  getEmail() {
    return localStorage.getItem('Email');
  }

  oldPassword= '';
  newPassword= '';

  errorMessage = ''
  successMessage = '';

  changePassword() {
    this.userService.changePassword(this.oldPassword, this.newPassword).subscribe((response) => {
      const successResponse = JSON.parse(JSON.stringify(response));
      console.log(successResponse);
      this.errorMessage = '';
      this.successMessage = 'Successfully changed password.';
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }, (errorResponse) => {
      console.log(errorResponse.error);
      this.errorMessage = errorResponse.error.error.message;
    })
  }

}

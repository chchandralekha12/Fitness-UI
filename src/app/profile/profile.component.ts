import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private userService: UserService
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

  passwordData = {
    oldPassword: '',
    newPassword: ''
  }

  errorMessage = ''

  changePassword() {
    this.userService.login(this.passwordData).subscribe((response) => {
      const successResponse = JSON.parse(JSON.stringify(response));
      console.log(successResponse);
    }, (errorResponse) => {
      console.log(errorResponse.error);
      this.errorMessage = errorResponse.error.error.message;
    })
  }

}

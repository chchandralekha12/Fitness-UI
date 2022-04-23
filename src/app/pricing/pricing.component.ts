import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  successMessage = '';

  addSubscription(subscription: number) {
    this.userService.addSubscription(subscription).subscribe((response) => {
      const successResponse = JSON.parse(JSON.stringify(response));
      console.log(successResponse);
      this.successMessage = 'Subscribed Successfully.';
      setTimeout(() => {
        window.location.href = '/user/subscription';
      }, 1000);
    }, (errorResponse) => {
      console.log(errorResponse.error);
    })
  }

}

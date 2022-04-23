import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(
    private userService:  UserService
  ) { }

  ngOnInit(): void {
    this.userService.getSubscription().subscribe((response) => {
      const successResponse = JSON.parse(JSON.stringify(response));
      console.log(successResponse);
      const subscription = this.getSubscription(successResponse.data.subscription);
      if(subscription) {
        this.activeSubscription = subscription;
      }
    }, (errorResponse) => {
      console.log(errorResponse.error);
    })
  }

  activeSubscription = {
    name: "N/A",
    duration: "N/A",
    basic: "N/A",
    personal: "N/A",
    timings: "N/A",
    price: "N/A"
  }

  subscriptions = [
    {
      id: 1,
      name: "Basic",
      duration: "3",
      basic: "Included",
      personal: "N/A",
      timings: "5:00 AM - 10:00 AM",
      price: "$30"
    },
    {
      id: 2,
      name: "Silver",
      duration: "6",
      basic: "Included",
      personal: "Not Included",
      timings: "5:00 AM - 10:00 AM <br /> 6:00 PM - 10:00 PM",
      price: "$50"
    },
    {
      id: 3,
      name: "Gold",
      duration: "12",
      basic: "Included",
      personal: "Included",
      timings: "5:00 AM - 10:00 PM",
      price: "$90"
    }
  ]

  getSubscription(id: number) {
    return this.subscriptions.find(subscription => subscription.id === id);
  }

  cancelSubscription() {
    this.userService.cancelSubscription().subscribe((response) => {
      const successResponse = JSON.parse(JSON.stringify(response));
      console.log(successResponse);
      window.location.reload();
    }, (errorResponse) => {
      console.log(errorResponse.error);
      window.location.reload();
    })
  }

}

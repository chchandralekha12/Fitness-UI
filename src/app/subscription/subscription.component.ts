import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const subscription = this.getSubscription(1);
    if(subscription) {
      this.activeSubscription = subscription;
    }
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

}

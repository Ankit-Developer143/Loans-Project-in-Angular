import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  customerId: string = '';
  customerDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService
  ) {}
  //here id refer to customer-routing
  ngOnInit() {
    //capturing id of customer
    this.activatedRoute.params.subscribe((data) => {
      console.log('Sub1');
      this.customerId = data.id;
      console.log(this.customerId);
    });
    this.customerService.viewCustomer(this.customerId).subscribe((data) => {
      console.log('Sub2');
      this.customerDetails = data;
      console.log(this.customerDetails);
    });
  }
}

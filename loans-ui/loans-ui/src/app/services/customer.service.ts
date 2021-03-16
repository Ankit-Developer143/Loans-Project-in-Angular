// ng g service customer

import { Injectable } from '@angular/core';

//app.module.ts import this first and then here import
import { HttpClient } from '@angular/common/http';

//Then import environment

import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  //httpclient injected  here
  constructor(private httpClient: HttpClient) {}

  //method to communicate with our backend APIs

  getCustomers() {
    let url =
      environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url);
    //then goto list-customer.component.ts
  }
  viewCustomer(id) {
    let url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER;
    return this.httpClient.get(`${url}/${id}`);
  }
  editCustomer(id, customerObj) {}
  deleteCustomer(id) {}
  searchCustomer(keyword) {}
}

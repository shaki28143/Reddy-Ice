import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// import 'rxjs/add/operators/map'; // just get map

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {
  //constructor(private _http: Http) { }

  
  getCustomers() {
    return [
      {
        "customerId": 1,
        "customerName": "Jack Kelsey",
        "isReddyIceCustomer": "Y"
      },
      {
        "customerId": 2,
        "customerName": "Shaun Michael",
        "isReddyIceCustomer": "Y"
      },
      {
        "customerId": 3,
        "customerName": "Gill Ambrose",
        "isReddyIceCustomer": "Y"
      },
      {
        "customerId": 4,
        "customerName": "Jill Franko",
        "isReddyIceCustomer": "Y"
      }
    ];
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

//import 'rxjs/add/operator/map'; // just get map

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class CustomerService {
  result: any;
  constructor(private _http: Http) { 
    console.log('http', this._http);
  }
  getCustomers() {
    return this._http.get('./mock-json/customers.json')
    .map(res => res.json());
  }
}
  
  // getCustomers() {
  //   return [
  //     {
  //       "customerId": 1,
  //       "customerName": "Jack Kelsey",
  //       "isReddyIceCustomer": "Y"
  //     },
  //     {
  //       "customerId": 2,
  //       "customerName": "Shaun Michael",
  //       "isReddyIceCustomer": "Y"
  //     },
  //     {
  //       "customerId": 3,
  //       "customerName": "Gill Ambrose",
  //       "isReddyIceCustomer": "Y"
  //     },
  //     {
  //       "customerId": 4,
  //       "customerName": "Jill Franko",
  //       "isReddyIceCustomer": "Y"
  //     }
  //   ];
  // }
//}

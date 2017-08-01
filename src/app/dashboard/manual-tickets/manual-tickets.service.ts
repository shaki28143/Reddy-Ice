import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const URL_CUSTOMER = 'app/customers.json';

@Injectable()
export class TicketService {
  constructor(private _http: Http) {
    console.log('http', this._http);
  }
  getTickets() {
    return this._http.get('./mock-json/tickets.json')
    .map(res => res.json());
  }
}

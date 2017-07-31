import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
@Injectable()
export class ReconciliationService {


    getDetails() {
        return [
            {
                "Route_Number": "801",
                "Location_Branch": "311",
                "Number_of_tickets": "15",
                "Amount": "1209.00"
            },
            {
                "Route_Number": "802",
                "Location_Branch": "312",
                "Number_of_tickets": "18",
                "Amount": "1123.00"
            },
            {
                "Route_Number": "803",
                "Location_Branch": "313",
                "Number_of_tickets": "16",
                "Amount": "1178.00"
            },
            {
                "Route_Number": "804",
                "Location_Branch": "314",
                "Number_of_tickets": "12",
                "Amount": "1999.00"
            },
            {
                "Route_Number": "805",
                "Location_Branch": "315",
                "Number_of_tickets": "17",
                "Amount": "1144.00"
            },
            {
                "Route_Number": "806",
                "Location_Branch": "316",
                "Number_of_tickets": "11",
                "Amount": "1288.00"
            }
        ];
    }
    getUnitReconcilition() {
        return [
            {
                "product": "Cocktail",
                "load": "112",
                "return": "12",
                "damage": "0",
                "sale": "12",
                "over_short": "0.00",
            },
            {
                "product": "Ice Bag",
                "load": "119",
                "return": "20",
                "damage": "0",
                "sale": "20",
                "over_short": "0.00",
            },
            {
                "product": "Ice Cubes",
                "load": "112",
                "return": "13",
                "damage": "0",
                "sale": "16",
                "over_short": "0.00",
            },
            {
                "product": "Machine Bag",
                "load": "220",
                "return": "2",
                "damage": "0",
                "sale": "112",
                "over_short": "0.00",
            },
            {
                "product": "Ice Slice",
                "load": "112",
                "return": "12",
                "damage": "0",
                "sale": "12",
                "over_short": "0.00",
            },
            {
                "product": "Ice Cubes BIG",
                "load": "112",
                "return": "12",
                "damage": "0",
                "sale": "12",
                "over_short": "0.00",
            },

        ]
    }
    getTicketDetails() {
        return [
            {
                "customer_id": "121",
                "Customer": "Walmart",
                "ticket": "2121212",
                "invoice_amount": "20.00",
                "cash": "20.00",
                "check": "0.00",
                "charge": "0.00",
            },
             {
                "customer_id": "122",
                "Customer": "711 Stores",
                "ticket": "2121213",
                "invoice_amount": "20.00",
                "cash": "20.00",
                "check": "0.00",
                "charge": "0.00",
            },
             {
                "customer_id": "123",
                "Customer": "Starbucks",
                "ticket": "2121214",
                "invoice_amount": "20.00",
                "cash": "20.00",
                "check": "0.00",
                "charge": "0.00",
            },
             {
                "customer_id": "124",
                "Customer": "Mc. Donalds",
                "ticket": "2121215",
                "invoice_amount": "20.00",
                "cash": "20.00",
                "check": "0.00",
                "charge": "0.00",
            },
             {
                "customer_id": "125",
                "Customer": "KFC",
                "ticket": "2121216",
                "invoice_amount": "20.00",
                "cash": "20.00",
                "check": "0.00",
                "charge": "0.00",
            },
        ]
    }
}

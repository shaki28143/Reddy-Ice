import { CustomerService } from '../customer.service';
import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl:'./customer-management.component.html',
    styleUrls:['./customer-management.scss']
})
export class CustomerManagementComponent implements OnInit{
    public customers:any[]
    constructor(private customerService:CustomerService){
    }

    ngOnInit(){
        this.customers = this.customerService.getCustomers();
    }
}
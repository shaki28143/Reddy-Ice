import { CustomerService } from '../customer.service';
import { Component, OnInit } from '@angular/core';
@Component({
    templateUrl:'./customer-management.component.html',
    styleUrls:['./customer-management.scss']
})
export class CustomerManagementComponent implements OnInit{
    public customers:any;
    constructor(private customerService:CustomerService){
        customerService.getCustomers().subscribe(
            val => this.customers = val,
            err => console.error(err)
        )}

    ngOnInit(){
        //this.customers = this.customerService.getCustomers();
    }
}
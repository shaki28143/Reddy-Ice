import { CustomerService } from '../customer.service';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector:'customer',
    templateUrl:'./customer-management.component.html',
    styleUrls:['./customer-management.scss']
})
export class CustomerManagementComponent implements OnInit{
    public customers:any;
    public filterText: string = "";
    public isAsc: boolean = true;
    public customer = {
        sortField : 'customerId'
    };
    constructor(private customerService:CustomerService){
        customerService.getCustomers().subscribe(
            val => this.customers = val,
            err => console.error(err)
        )}

    ngOnInit(){
        //this.customers = this.customerService.getCustomers();
    }
}
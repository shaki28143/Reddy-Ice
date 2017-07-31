import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from './customer-detail.metadata';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    templateUrl:'./customer-detail.component.html'
})
export class CustomerDetail implements OnInit{
    isReadOnly : boolean = false;
    selectedId : number;
    public title : string = "Add New Customer";
    public customer : Customer = {
        customerName : "",
        customerId: null,
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: null,
        email: ""
    }
    constructor(
        private route: ActivatedRoute,
        private customerService:CustomerService
    ) {
        
    }
    ngOnInit(){
        this.route.params.subscribe(params => {
            this.selectedId = +params['id']; // (+) converts string 'id' to a number
            if (this.selectedId) {
                console.log('id exist')
                this.isReadOnly = true;
                this.customerService.getCustomer(this.selectedId).subscribe(
                    val => this.customer = val[0],
                    err => console.error(err)
                )
            }
        });
    }
}
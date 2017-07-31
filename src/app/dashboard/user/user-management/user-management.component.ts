import { Component,OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
    templateUrl:'./user-management.component.html'
})
export class UserManagementComponent implements OnInit{
    public users:any[];
    constructor(private user:UserService){

    }

    ngOnInit(){
        this.users = this.user.getUsers();
    }

}
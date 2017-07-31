import { Component,OnInit } from '@angular/core';
import {UserService} from '../user.service';
@Component({
    templateUrl:'add-user.component.html',
})
export class AddUserComponent implements OnInit{
      public branches:any[];
constructor( private user:UserService){

}
ngOnInit(){
  this.branches=this.user.getBranch()
}
}
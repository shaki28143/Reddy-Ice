
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  templateUrl: 'user-details.component.html',
})
export class AddUserComponent implements OnInit {
  public branches: any[];
  public isReadOnly: boolean = false;
  public user:any = {}
  constructor(private userService: UserService, private activatedRoute:ActivatedRoute) {

  }
  ngOnInit() {
    if(this.activatedRoute.snapshot.data.isEdit){
      this.isReadOnly = true;
      let userId = this.activatedRoute.snapshot.params.id;
      this.user = this.userService.getUsers().filter((u)=>u.id == userId)[0];
    }
    this.branches = this.userService.getBranch()

  }
  onEdit() {
    this.isReadOnly = false;
  }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class UserService{
    getUsers(){
      return  [
            {
                "id":"111",
                "Route_id":"801",
                "Username":"Adhiraj",
                "Role":"Driver"
            },
            {
                "id":"112",
                "Route_id":"802",
                "Username":"Rishabh",
                "Role":"Driver"
            },
            {
                "id":"113",
                "Route_id":"803",
                "Username":"Shahkir",
                "Role":"Driver"
            },
            {
                "id":"114",
                "Route_id":"804",
                "Username":"Alok",
                "Role":"Admin"
            },
            {
                "id":"115",
                "Route_id":"805",
                "Username":"Rahul",
                "Role":"Admin"
            },
            {
                "id":"116",
                "Route_id":"806",
                "Username":"Vipin",
                "Role":"Admin"
            },
        ]
    }
    getBranch(){
        return[
            {
                 "id":"111",
                "Route_id":"801",
                "Location":"311",
                "Branch":"3111"
            },
             {
                  "id":"112",
                "Route_id":"802",
                "Location":"312",
                "Branch":"3112"
            },
             {
                 "id":"113",
                "Route_id":"803",
                "Location":"313",
                "Branch":"3113"
            },
             {
                 "id":"114",
                "Route_id":"804",
                "Location":"314",
                "Branch":"3114"
            },
             {
                 "id":"115",
                "Route_id":"805",
                "Location":"315",
                "Branch":"3115"
            },
             {
                  "id":"116",
                "Route_id":"806",
                "Location":"316",
                "Branch":"3116"
            },
             {
                  "id":"117",
                "Route_id":"807",
                "Location":"317",
                "Branch":"3117"
            },
        ]
    }
}
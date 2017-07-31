import {Component,OnInit} from '@angular/core';
import {ReconciliationService} from '../reconciliation.service';
@Component({
templateUrl:`./reconciliation.component.html`,
})
export class ReconciliationComponent implements OnInit{
     public details:any[]
     constructor(private recons:ReconciliationService){
    }

    ngOnInit(){
        this.details = this.recons.getDetails();
    }
}
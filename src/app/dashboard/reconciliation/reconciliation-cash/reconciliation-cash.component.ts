import {Component,OnInit} from '@angular/core';
import {ReconciliationService} from '../reconciliation.service';
@Component({
templateUrl:`./reconciliation-cash.component.html`,
})
export class ReconciliationCashComponent implements OnInit{
       public products:any[];
       public ticket_details:any[];
     constructor(private recons:ReconciliationService){
    }

    ngOnInit(){
        this.products = this.recons.getUnitReconcilition();
        this.ticket_details=this.recons.getTicketDetails();
    }
    
}
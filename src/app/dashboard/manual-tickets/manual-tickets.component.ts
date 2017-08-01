import { Component, OnInit } from '@angular/core';
import { TicketService } from './manual-tickets.service';
import { Ticket } from './manual-tickets.metadata';

@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'manual-tickets.component.html',
    styleUrls: ['./manual-tickets.component.scss']
})

export class ManualTicketsComponent implements OnInit {
  public tickets: Ticket[];
  constructor( private _ticketService: TicketService) {}

  ngOnInit() {
    this._ticketService.getTickets().subscribe(
        val => this.tickets = val,
        err => console.error(err)
    );
  }
}



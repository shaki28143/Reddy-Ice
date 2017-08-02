import { Component, OnInit } from '@angular/core';
import { TicketService } from '../manual-tickets.service';
import { Ticket } from './ticket-management.metadata';

@Component ({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'ticket-management.component.html',
    styleUrls: ['./ticket-management.component.scss']
})

export class TicketManagementComponent implements OnInit {
  public tickets: Ticket[];
  constructor( private _ticketService: TicketService) {}

  ngOnInit() {
    this._ticketService.getTickets().subscribe(
        val => this.tickets = val,
        err => console.error(err)
    );
  }
}



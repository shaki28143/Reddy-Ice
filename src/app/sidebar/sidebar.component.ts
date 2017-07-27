
import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';

declare var $:any;
@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls:['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    ngOnInit() {       
       $.getScript('../../assets/js/sidebar-moving-tab.js');
       this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

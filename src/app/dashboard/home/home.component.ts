import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
//import initDemo = require('../../../assets/js/charts.js');

//declare var $:any;

@Component({
    selector: 'home-cmp',
    
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
    ngOnInit(){
        // $('[data-toggle="checkbox"]').each(function () {
        //     if($(this).data('toggle') == 'switch') return;
        //
        //     var $checkbox = $(this);
        //     $checkbox.checkbox();
        // });
        //initDemo();
    }
}

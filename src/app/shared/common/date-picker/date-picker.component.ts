import { selector } from 'rxjs/operator/publish';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var $:any;

@Component({
    selector:'date-picker',
    template:`
        <div><input #datePicker type="text" class="form-control"></div>
    `
})
export class DatePicker implements AfterViewInit{
    @ViewChild('datePicker')datePicker:ElementRef;

    ngAfterViewInit(){
        $(this.datePicker.nativeElement).datepicker({format: 'mm/dd/yyyy',});
        $(this.datePicker.nativeElement).datepicker('update', new Date());
    }

}
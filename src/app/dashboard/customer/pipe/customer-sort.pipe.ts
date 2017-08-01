import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sortCustomer', pure: false
})

export class CustomerSortPipe implements PipeTransform {
    transform(array: any, sortField: string, isAsc:boolean): any {
        if(!array) return array;
        array.sort((a: any, b: any) => {
            if (isAsc) {
                if (a[sortField] < b[sortField]) {
                    return -1;
                } else if (a[sortField] > b[sortField]) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                if (a[sortField] > b[sortField]) {
                    return -1;
                } else if (a[sortField] < b[sortField]) {
                    return 1;
                } else {
                    return 0;
                }
            }
            
        });
        return array;
    }
}
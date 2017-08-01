import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'userSearch' })

export class UserSearchPipe implements PipeTransform {
    transform(items: any, filter: string): any {        
        filter = filter.toLowerCase();
        return items && items.filter(function (item) {
             let Username= item.Username.toLowerCase();
             return Username.indexOf(filter) >= 0;
        })
    }
}
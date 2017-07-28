import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'routeFilter'
})
export class RouteFilter implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

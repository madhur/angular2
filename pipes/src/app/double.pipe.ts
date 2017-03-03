import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mydouble'
})
export class DoublePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value*2;
  }

}

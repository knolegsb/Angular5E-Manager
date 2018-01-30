import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product-status'
})
export class ProductStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
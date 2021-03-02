import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchData'
})
export class SearchDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

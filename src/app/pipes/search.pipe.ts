import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any, value: any): any {
    if (value && data) {
      return data.filter(item => JSON.stringify(item).toLowerCase().includes(value.toLowerCase()))
    }
    else
      return data
  }

}

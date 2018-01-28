import { Pipe, PipeTransform } from '@angular/core';
import moment = require('moment');

@Pipe({
  name: 'getDay'
})
export class GetDayPipe implements PipeTransform {
  transform(value: string): string {
    return moment(value).format('dddd');
  }
}

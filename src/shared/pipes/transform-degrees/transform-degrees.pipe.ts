import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDegrees'
})
export class TransformDegreesPipe implements PipeTransform {
  transform(value: number): string {
    // Value is kelvin degrees: kelvin to celsius
    const degrees = Math.round( (value - 273.15) * 10 ) / 10;
    return degrees > 0 ? `+ ${degrees}` : `- ${degrees}`;
  }
}

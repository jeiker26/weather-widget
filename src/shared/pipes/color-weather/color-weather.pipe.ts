import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorWeather'
})
export class ColorWeatherPipe implements PipeTransform {
  transform(value: string): string {
    let color;

    switch (value.slice(0, -1)) {
      case('01'):
        color = 'yellow';
        break;
      case('02'):
        color = 'yellow';
        break;
      case('03'):
        color = 'blue';
        break;
      case('04'):
        color = 'blue';
        break;
      case('09'):
        color = 'blue';
        break;
      case('10'):
        color = 'blue';
        break;
      case('11'):
        color = 'grey';
        break;
      case('13'):
        color = 'grey';
        break;
      default:
        color = 'yellow';
        break;
    }

    return color;
  }
}

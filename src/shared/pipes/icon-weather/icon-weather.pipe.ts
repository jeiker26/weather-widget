import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconWeather'
})
export class IconWeatherPipe implements PipeTransform {
  transform(value: string): string {
    let icon = value.slice(-1) === 'd' ? 'wi-day-' : 'wi-night-';

    switch (value.slice(0, -1)) {
      case('01'):
        icon += 'sunny';
        break;
      case('02'):
        icon += 'sunny-overcast';
        break;
      case('03'):
        icon += 'cloudy';
        break;
      case('04'):
        icon += 'cloudy-high';
        break;
      case('09'):
        icon += 'sleet-storm';
        break;
      case('10'):
        icon += 'sprinkle';
        break;
      case('11'):
        icon += 'thunderstorm';
        break;
      case('13'):
        icon += 'snow';
        break;
      default:
        icon += 'sunny';
        break;
    }

    return icon;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-today',
  templateUrl: 'weather-today.html',
  styleUrls: ['./weather-today.scss']
})
export class WeatherTodayComponent {
  @Input('data') data;

  constructor() {
  }
}

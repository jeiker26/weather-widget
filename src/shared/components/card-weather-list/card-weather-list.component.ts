import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-weather-list',
  templateUrl: 'card-weather-list.html',
  styleUrls: ['./card-weather-list.scss']
})
export class CardWeatherListComponent {
  @Input('list') list;

  constructor() {
  }
}

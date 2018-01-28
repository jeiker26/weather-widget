import { Component, NgZone } from '@angular/core';
import { WeatherService } from 'shared/services/weather/weather.service';
import 'rxjs/add/operator/toPromise';

export interface Coordinates {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: any;
  weatherList: any;

  constructor(private zone: NgZone,
              private weatherService: WeatherService) {
    this.getWeather({lat: 51.528308, lng: -0.3817765});
  }

  onChangeLocation(coordinates) {
    if ( !(coordinates.lat && coordinates.lng) ) return;
    this.getWeather(coordinates);
  }

  getWeather(coordinates: Coordinates) {

    this.weatherService.getTodayByCoordinates(coordinates)
      .then((weather) => {
        this.zone.run(() => {
          this.weather = weather;
          console.log(this.weather);
        });
      });

    this.weatherService.getWeekByCoordinates(coordinates)
      .then((weather) => {
        this.zone.run(() => {
          this.weatherList = weather.list.filter((hour) => {
            // Filter one per day
            return hour.dt_txt.indexOf('12:00:00') === -1 ? false : true;
          });
        });
      });
  }
}

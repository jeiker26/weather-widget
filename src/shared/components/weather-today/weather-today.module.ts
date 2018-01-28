import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherTodayComponent } from './weather-today.component';
import { IconWeatherPiPeModule } from 'shared/pipes/icon-weather/icon-weather.module';
import { TransformDegreesPipeModule } from 'shared/pipes/transform-degrees/transform-degrees.module';
import { GetDayPipeModule } from 'shared/pipes/get-day/get-day.module';

@NgModule({
  imports: [
    CommonModule,
    IconWeatherPiPeModule,
    TransformDegreesPipeModule,
    GetDayPipeModule
  ],
  declarations: [
    WeatherTodayComponent
  ],
  exports: [
    WeatherTodayComponent
  ]
})
export class WeatherTodayModule { }

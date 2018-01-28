import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWeatherListComponent } from './card-weather-list.component';
import { TransformDegreesPipeModule } from 'shared/pipes/transform-degrees/transform-degrees.module';
import { IconWeatherPiPeModule } from 'shared/pipes/icon-weather/icon-weather.module';
import { ColorWeatherPipeModule } from 'shared/pipes/color-weather/color-weather.module';
import { GetDayPipeModule } from 'shared/pipes/get-day/get-day.module';

@NgModule({
  imports: [
    CommonModule,
    IconWeatherPiPeModule,
    TransformDegreesPipeModule,
    ColorWeatherPipeModule,
    GetDayPipeModule
  ],
  declarations: [
    CardWeatherListComponent
  ],
  exports: [
    CardWeatherListComponent
  ]
})
export class CardWeatherListModule { }

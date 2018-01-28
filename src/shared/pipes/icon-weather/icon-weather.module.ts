import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconWeatherPipe } from './icon-weather.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconWeatherPipe
  ],
  exports: [
    IconWeatherPipe
  ]
})
export class IconWeatherPiPeModule { }

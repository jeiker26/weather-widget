import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorWeatherPipe } from './color-weather.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColorWeatherPipe
  ],
  exports: [
    ColorWeatherPipe
  ]
})
export class ColorWeatherPipeModule { }

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Services
import { WeatherService } from './weather.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class WeatherServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WeatherServiceModule,
      providers: [
        WeatherService,
      ]
    };
  }
}

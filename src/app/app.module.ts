import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCustomModule } from 'shared/others/material.module';

// Components
import { SearchCityModule } from 'shared/components/search-city/search-city.module';
import { WeatherTodayModule } from 'shared/components/weather-today/weather-today.module';
import { CardWeatherListModule } from 'shared/components/card-weather-list/card-weather-list.module';

// Services
import { WeatherServiceModule } from 'shared/services/weather/weather.module';

// Directives
import { GoogleplaceDirectiveModule } from 'shared/directives/googleplaces/googleplaces.module';

// Interceptor
import { ClientHttpInterceptor } from 'shared/services/interceptor/http.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CardWeatherListModule,
    WeatherTodayModule,
    SearchCityModule,
    GoogleplaceDirectiveModule,
    WeatherServiceModule.forRoot(),
    MaterialCustomModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: ClientHttpInterceptor,
        multi: true,
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

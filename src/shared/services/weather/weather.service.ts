import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) {
  }

  getTodayByCoordinates(coordinates): Promise<any> {
    return this.http.get(`${environment.api}/weather?lat=${coordinates.lat}&lon=${coordinates.lng}`).toPromise();
  }

  getWeekByCoordinates(coordinates): Promise<any> {
    return this.http.get(`${environment.api}/forecast?lat=${coordinates.lat}&lon=${coordinates.lng}`).toPromise();
  }

}

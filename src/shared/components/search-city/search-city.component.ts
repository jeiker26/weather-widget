import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-city',
  templateUrl: 'search-city.html',
  styleUrls: ['./search-city.scss']
})
export class SearchCityComponent {
  @Output() change: EventEmitter<any> = new EventEmitter();
  error: string;

  constructor() {
  }

  getAddressOnChange(e) {
    if ( !(e && e.geometry && e.geometry.location) ) {
      this.error = 'You must select one from the list';
      return;
    }

    this.error = '';
    const geometry = {lat: e.geometry.location.lat(), lng: e.geometry.location.lng()};
    this.change.emit(geometry);
  }
}

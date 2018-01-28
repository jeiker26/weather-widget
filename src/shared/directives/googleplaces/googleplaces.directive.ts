import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {NgModel} from '@angular/forms';

declare var google: any;

@Directive({
  selector: '[Googleplace]',
  providers: [NgModel]
})
export class GoogleplaceDirective {

  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  autocomplete: any;
  private _el: HTMLElement;


  constructor(el: ElementRef) {
    this._el = el.nativeElement;
    const input = this._el;

    this.autocomplete = new google.maps.places.Autocomplete(input, {
      componentRestrictions: {
        country: []
      },
      types: ['(cities)']
    });
    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      const place = this.autocomplete.getPlace();
      this.invokeEvent(place);

    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }

}

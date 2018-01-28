import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'environments/environment';

@Injectable()
export class ClientHttpInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url: string;
    if (request.url.indexOf('?') === -1) {
      url = `${request.url}?APPID=${environment.api_key_weather}`;
    } else {
      url = `${request.url}&APPID=${environment.api_key_weather}`;
    }

    request = request.clone({ url: url });

    return next.handle(request);
  }
}

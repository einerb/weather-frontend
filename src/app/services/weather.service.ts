import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Constant } from '../shared/constants';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private globalService: GlobalService) {}

  public getByLocation(location: any) {
    return this.globalService
      .get(Constant.Endpoints.WEATHER.BASE + '/' + location)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}

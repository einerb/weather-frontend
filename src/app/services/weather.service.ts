import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Constant } from '../shared/constants';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private globalService: GlobalService) {}

  /* service to obtain the coordinates of a city through the MapBox API. */
  public getByLocation(lat: any, long: any) {
    return this.globalService
      .get(Constant.Endpoints.WEATHER.BASE + '/' + lat + ',' + long)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  /* service to obtain the climatic data of a city through the coordinates, consuming the DarkSky api. */
  public getByCoordinate(city: any) {
    return this.globalService
      .get(Constant.Endpoints.MAPBOX.BASE + '/' + city + Constant.API_KEY)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}

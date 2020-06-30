import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public weatherData;
  public coordinateData;
  public dateNow;
  public city;

  public submitted = false;

  /* injection services */
  constructor(
    private weatherService: WeatherService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    this.searchCity(this.city);
  }

  /* method to obtain the coordinates of a city. */
  public searchCity(city: string) {
    /* convert input text to lowercase. */
    let cityLowercase = city?.toLowerCase();

    this.weatherService.getByCoordinate(cityLowercase).subscribe((res) => {
      this.coordinateData = res.features;

      /* method call and parameter passing. */
      this.getWeather(
        this.coordinateData[0].geometry.coordinates[1],
        this.coordinateData[0].geometry.coordinates[0]
      );

      /* show spinner */
      this.spinnerService.show();
    });
  }

  /* method to obtain the climate of a city through its coordinates. */
  private getWeather(lat: any, long: any) {
    this.weatherService.getByLocation(lat, long).subscribe((res) => {
      this.weatherData = res;

      /* Hidden spinner */
      this.spinnerService.hide();
    });
  }
}

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
  public dateNow;

  constructor(
    private weatherService: WeatherService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinnerService.show();
    this.getWeather();
    this.dateNow = Date.now();
  }

  private getWeather() {
    this.weatherService.getByLocation('4.6021,-74.1026').subscribe((res) => {
      this.weatherData = res;

      console.log(this.weatherData);

      this.spinnerService.hide();
    });
  }
}

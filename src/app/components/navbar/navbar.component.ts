import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public weatherData: any = {};

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather('4.6021,-74.1026');
  }

  private getWeather(location: string) {
    this.weatherService.getByLocation(location).subscribe((res) => {
      this.weatherData = res;

      console.log(this.weatherData);
    });
  }
}

import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public weatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }

  private getWeather() {
    this.weatherService.getByLocation('4.6021,-74.1026').subscribe((res) => {
      this.weatherData = res.currently;
    });
  }
}

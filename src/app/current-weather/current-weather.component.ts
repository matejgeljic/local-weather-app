import { Component, OnInit } from '@angular/core';
import { IcurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  current: IcurrentWeather;

  constructor(private weatherService: WeatherService) { 
    
  }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Brcko', 'BA')
      .subscribe((data) => this.current = data)
  }

}

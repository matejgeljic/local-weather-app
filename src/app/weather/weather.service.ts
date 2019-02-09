import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IcurrentWeather} from '../interfaces';
import { map } from 'rxjs/operators';

export interface IWeatherService {
  getCurrentWeather(city: string, country: string): Observable<IcurrentWeather>

}

interface ICurrentWeatherData {
  weather: [{
    description: string;
    icon: string;
  }],
  main: {
    temp: number;
  },
  sys: {
    country: string;
  },
  dt: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService implements IWeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(search: string | number, country?: string): Observable<IcurrentWeather>{
    let uriParams = '';
    if(typeof search === 'string') {
      uriParams = `q=${search}`
    } else {
      uriParams = `zip=${search}`
    }

    if(country){
      uriParams = `${uriParams}, ${country}`
    }
    return this.getCurrentWeatherHelper(uriParams);
  }


  private getCurrentWeatherHelper(uriParams: string):Observable<IcurrentWeather> {
    return this.httpClient
      .get<ICurrentWeatherData>(`${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
      `${uriParams}&appid=${environment.appId}`)
      .pipe(map(data => this.
        transformToICurrentWeather(data)))
  }

  private transformToICurrentWeather(data:ICurrentWeatherData):IcurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `${environment.baseUrl}openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToCelsius(data.main.temp),
      description: data.weather[0].description
    };
  }

  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

}

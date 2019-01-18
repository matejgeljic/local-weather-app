import { Observable, of } from 'rxjs';

import { IWeatherService } from './weather.service'
import { IcurrentWeather } from '../interfaces';


export class WeatherServiceFake implements IWeatherService {
    private fakeWeather: IcurrentWeather = {
        city: 'Bursa',
        country: 'TR',
        date: 1485789600,
        image: '',
        temperature: 280.32,
        description: 'light intensit drizzle',
    }

    public getCurrentWeather(city: string, country: string): Observable<IcurrentWeather> {
        return of(this.fakeWeather);
    }
}
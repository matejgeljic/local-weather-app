import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeatherService = TestBed.get(WeatherService);
    imports: [HttpClientTestingModule]
    expect(service).toBeTruthy();
  });
});

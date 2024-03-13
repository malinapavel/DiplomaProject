import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public forecast?: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<WeatherForecast[]>('https://localhost:7113/WeatherForecast').subscribe((result:WeatherForecast[]) => {
      this.forecast = result;
    });
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary?: string;
}

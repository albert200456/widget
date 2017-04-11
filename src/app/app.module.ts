import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { WeatherComponent } from './weather/weather.component';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';
import { CONST_ROUTING } from './app.routing';
import { SharedService } from './shared.service';
import { MapComponent } from './map/map.component';

import { AgmCoreModule, SebmGoogleMap } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    CurrencyComponent,
    MovieComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQsUu-D8WfWosD7yrdvUSLk37K5URuQ7g'
    })
  ],
  exports: [AppComponent],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

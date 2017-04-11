import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map.component';
import { AppComponent } from '.././app.component';

import { AgmCoreModule, SebmGoogleMap } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    SebmGoogleMap,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQsUu-D8WfWosD7yrdvUSLk37K5URuQ7g'
    })
  ],
  providers: [],
  declarations: [ MapComponent,AppComponent ],
  bootstrap: [ MapComponent ]
})
export class MapModule {}
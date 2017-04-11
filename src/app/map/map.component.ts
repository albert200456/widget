import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: ['./map.component.css']
})
export class MapComponent {
  title: string = 'Google Map';
  lat: number = 51.678418;
  lng: number = 7.809007;
}

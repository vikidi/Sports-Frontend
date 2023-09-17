import { Component, Input, OnInit } from '@angular/core';
import { max, min } from 'lodash';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  imports: [NgxMapboxGLModule],
})
export class MapComponent implements OnInit {
  @Input() data: {
    latitude: number;
    longitude: number;
    altitudeMeters: number;
    elapsedSec: number;
  }[] = [];

  public geometry: any;

  public bounds: any;

  ngOnInit() {
    this.geometry = {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: this.data.map((p: any) => [p.longitude, p.latitude]),
      },
    };

    const lon = this.data.map((p: any) => p.longitude);
    const lat = this.data.map((p: any) => p.latitude);

    this.bounds = [
      [min(lon) - 0.001, min(lat) - 0.001],
      [max(lon) + 0.001, max(lat) + 0.001],
    ];
  }
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';






@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @ViewChild('map') private map;

  constructor() { }

  ngAfterViewInit(): void {

    this.map = L.map('map',{
      center: [45.7, 4.8],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      tiles.addTo(this.map);
    } 
  }


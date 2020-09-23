import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

@Input()
descrip:any;

  @Input()
  lat:any;

  @Input()
  lon:any;

  @ViewChild('map') private map;

  smallicon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41]
  }); 
  
  constructor() { 
  }

  ngAfterViewInit(): void { 
    console.log(this.lat, this.lon);
    this.createMap();
  }

  private createMap() {
    const coord = {
      lat: this.lat,
      lng: this.lon,
    };

    const zoomLevel = 12;

    this.map = L.map('map', {
      center: [coord.lat, coord.lng],
      zoom: zoomLevel
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 12,
      maxZoom: 17,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
    const description = this.descrip;
    const popupOptions = {
      coords: coord,
      text: description,
      open: false
    };
    this.addMarker(popupOptions);
  }

  private addMarker({coords, text, open}) {
    const marker = L.marker([coords.lat, coords.lng], { icon: this.smallicon });
    if (open) {
      marker.addTo(this.map).bindPopup(text).openPopup();
    } else {
      marker.addTo(this.map).bindPopup(text);
    }
  }
}


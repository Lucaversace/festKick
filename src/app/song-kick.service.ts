import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongKickService {

  readonly API_KEY = 'io09K9l3ebJxmxe2';
  objId: any;
  id: number;

  constructor(private http: HttpClient) { }


  getLatLonCity(city:string):Observable<any>{
    let req = 'https://api.songkick.com/api/3.0/search/locations.json?query='+city+'&apikey=' + this.API_KEY;
    return this.http.get(req)

  }


  getEvents(lat:number, lon:number):Observable<any>{

    let req = 'https://api.songkick.com/api/3.0/events.json?apikey='+ this.API_KEY + '&location=geo:' +lat+','+lon;
    let response = this.http.get(req)
    return response
  }
  

  getEventDetails(eventId:string):Observable<any>{

    let url = 'https://api.songkick.com/api/3.0/events/'+ eventId +'.json?apikey='+ this.API_KEY;
    let response = this.http.get(url);

    return response
  }

}

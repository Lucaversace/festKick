import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongKickService } from '../song-kick.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css'],
})
export class EventsListComponent implements OnInit {

  events: any;
  objId: any;

  constructor(
    private songKickServ: SongKickService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.songKickServ
        .getLatLonCity(params.location)
        .subscribe((locationDetails) => {

          const lat = locationDetails.resultsPage.results.location[0].city.lat;
          const lon = locationDetails.resultsPage.results.location[0].city.lng;

          this.songKickServ.getEvents(lat,lon).subscribe((data) => {
            this.events = data;
            console.log(data);
          });
        });
    });
  }
}

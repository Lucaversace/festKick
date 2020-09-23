import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SongKickService } from '../song-kick.service';

@Component({
  selector: 'app-descrip-event',
  templateUrl: './descrip-event.component.html',
  styleUrls: ['./descrip-event.component.css']
})
export class DescripEventComponent implements OnInit {

  Details:any;
  lat:any;
  lon:any;

  constructor(private servSongkick: SongKickService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.servSongkick.getEventDetails(params.id).subscribe((eventDetails:any) =>{

        this.Details = eventDetails.resultsPage.results.event;
        this.lat = eventDetails.resultsPage.results.event.venue.lat;
        this.lon = eventDetails.resultsPage.results.event.venue.lng; 

        
        console.log(this.lat, this.lon);
        console.log(eventDetails);

      });
  });

};

}
 
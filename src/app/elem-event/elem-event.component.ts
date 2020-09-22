import { Component, OnInit } from '@angular/core';
import { SongKickService } from '../song-kick.service';

@Component({
  selector: 'app-elem-event',
  templateUrl: './elem-event.component.html',
  styleUrls: ['./elem-event.component.css']
})
export class ElemEventComponent implements OnInit {

  event:any;

  constructor(private songKickServ: SongKickService) { }

  ngOnInit(): void {

  }

}

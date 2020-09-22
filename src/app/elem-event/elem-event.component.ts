import { Component, Input, OnInit } from '@angular/core';
import { SongKickService } from '../song-kick.service';

@Component({
  selector: 'app-elem-event',
  templateUrl: './elem-event.component.html',
  styleUrls: ['./elem-event.component.css']
})
export class ElemEventComponent implements OnInit {

  @Input()
  event:Object[];

  constructor(private songKickServ: SongKickService) { }

  ngOnInit(): void {
    console.log(this.event);
  }

}

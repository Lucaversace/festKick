import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'festkick';
  get _cityName():string{
    return this._cityName
  }
  set _cityName(value:string){
    this._cityName = value;
   }
  }

 
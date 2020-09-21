import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-home',
  templateUrl: './form-home.component.html',
  styleUrls: ['./form-home.component.css']
})
export class FormHomeComponent implements OnInit {

  cityName:string;

  constructor() { }

  ngOnInit(): void {
  }

  get _cityName():string{
    return this._cityName;
  }
  set _cityName(value:string){
    this._cityName = value;
   }
}


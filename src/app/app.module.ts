import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EventsListComponent } from './events-list/events-list.component';
import { DescripEventComponent } from './descrip-event/descrip-event.component';
import { FormHomeComponent } from './form-home/form-home.component';
import { ElemEventComponent } from './elem-event/elem-event.component';
import { MapComponent } from './map/map.component';
import { DescripComponent } from './descrip/descrip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsListComponent,
    DescripEventComponent,
    FormHomeComponent,
    ElemEventComponent,
    MapComponent,
    DescripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgModel,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EventsListComponent } from './events-list/events-list.component';
import { DescripEventComponent } from './descrip-event/descrip-event.component';
import { ElemEventComponent } from './elem-event/elem-event.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    DescripEventComponent,
    HomeComponent,
    ElemEventComponent,
    MapComponent,
    MenuComponent,
  ],
  imports: [
    LeafletModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

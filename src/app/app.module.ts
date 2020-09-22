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
import { FormHomeComponent } from './form-home/form-home.component';
import { ElemEventComponent } from './elem-event/elem-event.component';
import { MapComponent } from './map/map.component';
import { DescripComponent } from './descrip/descrip.component';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    DescripEventComponent,
    FormHomeComponent,
    HomeComponent,
    ElemEventComponent,
    MapComponent,
    DescripComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
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

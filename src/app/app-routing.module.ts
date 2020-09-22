import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescripEventComponent } from './descrip-event/descrip-event.component';
import { EventsListComponent } from './events-list/events-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Events/:location', component: EventsListComponent},
  {path: 'Event/:name', component: DescripEventComponent},
  {path: '**', redirectTo:"Home"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

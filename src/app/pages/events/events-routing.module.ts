import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EventEditComponent } from './pages/event-edit/event-edit.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'details/:id', component: EventDetailsComponent },
  { path: 'edit/:id', component: EventEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }

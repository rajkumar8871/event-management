import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { GridModule } from '../../common/grid/grid.module';
import { SearchModule } from '../../common/search/search.module';
import { SearchPipe } from '../../pipes/search.pipe';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { EventEditComponent } from './pages/event-edit/event-edit.component';
import { EventService } from './services/event.service';

@NgModule({
  declarations: [EventsComponent, EventDetailsComponent, EventEditComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    GridModule,
    SearchModule,
    SearchPipe,
    ReactiveFormsModule
  ],
  providers: [EventService],
})
export class EventsModule { }

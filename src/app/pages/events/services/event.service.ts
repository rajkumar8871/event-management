import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Event } from './../event.model';

@Injectable()
export class EventService {

  eventsSubject = new BehaviorSubject<Event[]>([]);
  getEvents = this.eventsSubject.asObservable();

  setEvents(event: Event) {
    const events = this.eventsSubject.value;
    this.eventsSubject.next([...events, event]);
  }

  updateEvents(events: Event[]) {
    this.eventsSubject.next(events);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Event } from './event.model';
import { Columns } from './constant';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {

  count: number = 5;
  total: number = 0;
  searchField: string = '';
  searchPlaceholder: string = 'Search by Type...';
  columns = Columns;
  allEvents: Event[] = [];
  events: Event[] = [];

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents.subscribe(events => {
      this.allEvents = events;
      this.total = this.allEvents.length;
      this.events = this.allEvents.slice(0, this.count);
    });
  }

  search(search: string) {
    this.searchField = search;
  }

  select(id: number) {
    this.router.navigate(['details', id]);
  }

  edit(id: number) {
    this.router.navigate(['edit', id]);
  }

  delete(id: number) {
    this.events = this.events.filter(f => f.id != id);
    this.allEvents = this.allEvents.filter(f => f.id != id);
    this.total = this.allEvents.length;
  }

  loadMore() {
    const moreEvents = this.allEvents.slice(this.events.length, this.events.length + this.count);
    this.events = [...this.events, ...moreEvents];
  }

}

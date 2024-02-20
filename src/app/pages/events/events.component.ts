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

  searchField: string = '';
  searchPlaceholder: string = 'Search by Type...';
  columns = Columns;
  events: Event[] = [];

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents.subscribe(e => this.events = e);
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
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Event } from '../../event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.css'
})
export class EventDetailsComponent implements OnInit {
  event: Event | null = null;
  id: number = 0;

  constructor(private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!) || 0;

    this.event = {
      id: 1,
      type: '',
      image: '',
      date: '',
      gender: '',
      location: {
        country: 'sad',
        state: 'asd',
        street: 'sad',
        city: 'sad',
        zipcode: '234234'
      }
    }
  }

  ngOnInit(): void {
    if (this.id > 0) {
      this.eventService.getEvents.subscribe((events: Event[]) => {
        const event = events.find(f => f.id === this.id);
        if (event) this.event = event;
        else this.goHome();
      });
    } else {
      this.goHome();
    }
  }

  goHome() {
    this.toastr.error('Event not found!');
    this.router.navigate(['/']);
  }

}

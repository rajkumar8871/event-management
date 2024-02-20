import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { EventService } from '../../services/event.service';
import { Regex } from '../../../../constants';
import { Genders, Types } from '../../constant';
import { Event } from '../../event.model';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrl: './event-edit.component.css'
})
export class EventEditComponent implements OnInit {
  imageURL: string = '';
  events: Event[] = [];
  event: Event | null = null;
  id: number = 0;
  title: string = 'Create';
  form: FormGroup;
  submitted = false;
  types: Array<string> = Types;
  genders: Array<string> = Genders;

  constructor(private fb: FormBuilder,
    private router: Router,
    private eventService: EventService,
    private route: ActivatedRoute,
    private toastr: ToastrService) {

    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.id = isNaN(id) ? new Date().getTime() : id;

    if (this.id > 0) this.title = 'Update';

    this.form = this.fb.group({
      id: [this.id > 0 ? this.id : new Date().getTime()],
      type: ['', Validators.required],
      image: [''],
      location: this.fb.group({
        country: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        street: ['', Validators.required],
        zipcode: ['', [Validators.required, Validators.pattern(Regex.digit), Validators.minLength(6)]]
      }),
      date: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    if (this.id > 0) {
      this.eventService.getEvents.subscribe((events: Event[]) => {
        this.events = events;
        const event = events.find(e => e.id === this.id);
        if (event) {
          this.imageURL = event.image;
          this.form.patchValue(event);
        } else {
          this.toastr.error('Event not found!');
          this.router.navigate(['/']);
        }
      });
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return (this.form as FormGroup).controls;
  }

  get locationControls(): { [key: string]: AbstractControl } {
    return (this.form.get('location') as FormGroup).controls;
  }

  showPreview(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;

    }
    reader.readAsDataURL(file)
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;

    const event = this.form.value;
    event.image = './assets/images/event.jpg';

    if (this.imageURL && this.imageURL != '') { console.log('inn'); event.image = this.imageURL; }

    if (this.id > 0) {
      const events = this.events.map((m: Event) => {
        if (m.id === this.id) m = event;
        return m;
      });
      this.eventService.updateEvents(events);
      this.toastr.success('Event has been updated successfully!');
    } else {
      this.eventService.setEvents(event);
      this.toastr.success('Event has been created successfully!');
    }
    this.router.navigate(['/']);
  }

}

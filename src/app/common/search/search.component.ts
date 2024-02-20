import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements AfterViewInit {
  @ViewChild('edit', { static: false }) edit!: ElementRef;
  @Input() searchField: any;
  @Input() placeholder: string = 'Search...';
  @Output() onSearch = new EventEmitter<string>();

  ngAfterViewInit() {
    fromEvent(this.edit.nativeElement, "keyup").pipe(
      map(event => this.edit.nativeElement.value),
      debounceTime(500)
    ).subscribe(val => this.onSearch.emit(val));
  }

}

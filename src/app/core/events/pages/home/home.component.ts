import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from 'src/app/services/events/events.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { EventCardComponent } from '../../components/event-card/event-card.component';
import { Event } from 'src/app/interfaces/event.interface';
import { MaterialModule } from 'src/app/material/material/material.module';
import { AccessibleHeaderComponent } from '../../components/accessible-header/accessible-header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    AccessibleHeaderComponent,
    EventCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events$: Observable<Event[]> = new BehaviorSubject([]);

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.events$ = this.eventsService.getEvents();
  }

  onSearch(searchField: string) {
    this.events$ = this.eventsService.getSuggestion(searchField);
  }
}

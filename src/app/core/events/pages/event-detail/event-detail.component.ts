import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessibleHeaderComponent } from '../../components/accessible-header/accessible-header.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { Event } from 'src/app/interfaces/event.interface';
import { EventsService } from 'src/app/services/events/events.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    AccessibleHeaderComponent
  ],
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event$!: Observable<Event>;
  currentPhoto: string = '';

  constructor(
    private router: ActivatedRoute,
    private eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this.setEvent();
  }

  setEvent(): void {
    this.event$ = this.router.params.pipe(
      switchMap(({ eventId }) => this.eventsService.getEventById(eventId)),
      tap((value) => this.currentPhoto = value.frontPage)
    );
  }

  changeCurrentPhoto(pic: string) {
    this.currentPhoto = pic;
  }
}

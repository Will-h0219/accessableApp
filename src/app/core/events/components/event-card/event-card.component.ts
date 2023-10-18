import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from 'src/app/interfaces/event.interface';
import { MaterialModule } from 'src/app/material/material/material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent {
  @Input() event!: Event;
}

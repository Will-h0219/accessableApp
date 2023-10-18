import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interfaces/event.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseUrl: string = `${environment.baseUrl}/events`;

  constructor(private http: HttpClient) { }

  getEvents():Observable<Event[]> {
    return this.http.get<Event[]>(this.baseUrl);
  }

  getEventById(eventId: string): Observable<Event> {
    const url = `${this.baseUrl}/${eventId}`;
    return this.http.get<Event>(url);
  }

  getSuggestion(term: string): Observable<Event[]> {
    const url = `${this.baseUrl}?q=${term}`;
    return this.http.get<Event[]>(url);
  }
}

export interface Event {
  id: number;
  eventName: string;
  frontPage: string;
  photos: string[];
  eventDetails: EventDetail;
  ticketPrices: TicketPrice[];
}

export interface EventDetail {
  title?: string;
  description: string;
}

export interface TicketPrice {
  type: string;
  price: string;
}

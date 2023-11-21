import { Injectable } from '@angular/core';
import { Booking } from '../interface/booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor() {}

  userUrl = 'http://localhost:9000/booking';

  async createBooking(tour_id: any, user_id: string) {
    console.log(user_id);

    const response = await fetch(`${this.userUrl}/newBooking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({tour_id, user_id}),
    });
    // console.log(response);

    return response.json();
  }

  async deleteBooking(booking_id: string) {
    const response = await fetch(`${this.userUrl}/${booking_id}`, {
      method: 'DELETE',
    });

    return response.json();
  }

  async getBooking(booking_id: string) {
    const response = await fetch(`${this.userUrl}/${booking_id}`);
    const booking = await response.json();
    return booking;
    // console.log(booking);
    // return booking;
    // return response.json();

  }

  async getUserBooking(user_id: string) {
    const response = await fetch(`${this.userUrl}/user/${user_id}`);
    const booking = await response.json();
    return booking;
    // console.log(booking);
  }
}

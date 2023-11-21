import { Component } from '@angular/core';
import { TourService } from '../services/tour.service';
import { BookingService } from '../services/booking.service';
import { Tour } from '../interface/tour';
import { Booking } from '../interface/booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent {
  bookings: Booking[] = [];
  bookedTours: Tour[] = [];

  constructor(
    private bookingService: BookingService,
    private tourService: TourService
  ) {}

  // async getBookings() {
  //   try {
  //     const response = await this.bookingService.getBookings();
  //     this.bookings = response;

  //     this.getBookedTours();
  //   } catch (error) {
  //     console.error('Error getting bookings:', error);
  //   }
  // }

  // async getBookedTours() {
  //   try {
  //     const tourIds = this.bookings.map((booking) => booking.tour_id);

  //     const toursResponse = await this.tourService.getToursByIds(tourIds);
  //     this.bookedTours = toursResponse;
  //   } catch (error) {
  //     console.error('Error getting booked tours:', error);
  //   }
  // }

  deleteBooking(bookingId: any) {

  }
}

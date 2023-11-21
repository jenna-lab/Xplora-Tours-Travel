import { BookingService } from './../services/booking.service';
import { Component } from '@angular/core';
import { Modal, Ripple, initTE, Tab, Input } from 'tw-elements';
import { Tour } from '../interface/tour';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  tours: Tour[] = [];
  constructor(private tourService: TourService, private bookingService:BookingService )  {
    this.getAllTours();
  }

  ngOnInit() {
    initTE({ Tab, Input });
  }

  async getAllTours() {
    let response = await this.tourService.getAllTours();
    console.log(response);
    this.tours = response;
  }

  async bookTour (tour: Tour) {
    // console.log(tour)
    const user_id = localStorage.getItem('user_id') as string;
    const response = await this.bookingService.createBooking(tour.tour_id, user_id);
    console.log(response);
    if (response.status == 200) {
      alert('Booking successfull')
    }

  }




}

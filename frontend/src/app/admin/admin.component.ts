import { updateTour } from './../../../../server/src/controllers/tourController';
import { Component } from '@angular/core';
import { Modal, Ripple, initTE, Tab, Input } from 'tw-elements';
import { TourService } from '../services/tour.service';
import { Tour } from '../interface/tour';
import { UserLogin, UserRegister } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  tours: Tour[] = [];
  users: UserRegister[] = [];


  tourData: Tour = {
    tour_id: '',
    title: '',
    description: '',
    destination: '',
    price: 0,
    imageUrl: '',
    start_date: '',
    end_date: '',
  };

  constructor(
    private tourService: TourService,
    private userService: UserService
  ) {
    console.log(tourService);
    this.getAllTours();
    this.getAllUsers();

  }
  ngOnInit() {
    initTE({ Tab, Input });
  }

  async createTour(data: any) {
    const tourData = {
      title: this.tourData.title,
      description: this.tourData.description,
      destination: this.tourData.destination,
      price: this.tourData.price,
      imageUrl: this.tourData.imageUrl,
      start_date: this.tourData.start_date,
      end_date: this.tourData.end_date,
    };

    let response = await this.tourService.addTour(tourData);
    if (response) {
      alert('Tour added successfully');
      this.getAllTours();
    }

  }

  async getAllTours() {
    let response = await this.tourService.getAllTours();
    this.tours = response;
  }

  async getAllUsers() {
    try {
      const token = localStorage.getItem('token');

      const response = await this.userService.getAllUsers('token');

      this.users = response;
    } catch (error) {
      console.error('Error getting users:', error);
    }
  }

  

  async deleteTour(tourId: any) {
    try {
      const confirmed = confirm('Are you sure you want to delete this tour?');
      if (confirmed) {
        await this.tourService.deleteTour(tourId);
      alert('Tour deleted successfully');
        this.getAllTours();
      }
    } catch (error) {
      console.error('Error deleting tour:', error);
    }
  }


}

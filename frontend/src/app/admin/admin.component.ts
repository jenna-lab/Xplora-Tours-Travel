import { Component } from '@angular/core';
import { Modal, Ripple, initTE, Tab, Input } from 'tw-elements';
import { TourService } from '../services/tour.service';
import { Tour } from '../interface/tour';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  tours:Tour[]  = [];

  tourData: Tour = {
  title: '',
  description: '',
  destination: '',
  price: 0,
  imageUrl: '',
  };

  constructor(private tourService: TourService) {
    console.log(tourService);
    this.getAllTours();

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
     };
    let response = await this.tourService.addTour(tourData);

    console.log(response);
  }

 async getAllTours() {
  let response = await this.tourService.getAllTours();
    console.log(response);
  this.tours = response;
 }

}

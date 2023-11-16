import { Component } from '@angular/core';
import { Modal, Ripple, initTE, Tab, Input } from 'tw-elements';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {

  constructor(private tourService:TourService) {

    console.log(tourService);

   }
  ngOnInit() {
    initTE({ Tab, Input });


  }

  async createTour(data: any){

   let response = await this.tourService.addTour(data);
   console.log(response);


  }
}

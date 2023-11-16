import { Injectable } from '@angular/core';
import { Tour } from '../interface/tour';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  constructor() {}

  userUrl = 'http://localhost:9000/tour';


  async addTour(tourData:Tour ) {
    const response = await fetch(`${this.userUrl}/newTour`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tourData),
    });
    // console.log(response);

    return response.json();
  }
}
import { updateTour } from './../../../../server/src/controllers/tourController';
import { Injectable } from '@angular/core';
import { Tour } from '../interface/tour';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  constructor() {}

  userUrl = 'http://localhost:9000/tour';

  async addTour(tourData: Tour) {
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

  async deleteTour(tourId: any) {
    const response = await fetch(`${this.userUrl}/deleteTour/${tourId}`, {
      method: 'DELETE',
    });

    return response.json();
  }

  async getAllTours() {
    const response = await fetch(`${this.userUrl}/tours`, {
      method: 'GET',
      headers: {
        // token: token,
      },
    });
    return response.json();
  }
  async updateTour(tourData: Tour) {
    const response = await fetch(`${this.userUrl}/updateTour`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tourData),
    });
    return response.json();
  }
}

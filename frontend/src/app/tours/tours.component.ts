import { Tour } from '../interface/tour';
import { TourService } from './../services/tour.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
})
export class ToursComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private tourService: TourService) {}

  ngOnInit(): void {
    this.fetchTours();
  }

  async fetchTours() {
    try {
      this.tours = await this.tourService.getAllTours();
    } catch (error) {
      console.error('Error fetching tours', error);
    }
  }
}

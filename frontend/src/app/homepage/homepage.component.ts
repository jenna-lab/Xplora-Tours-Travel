import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  slides: string[] = [
    'https://placekitten.com/800/400',
    'https://placekitten.com/800/401',
    'https://placekitten.com/800/402',
  ];

  currentSlide = 0;

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}

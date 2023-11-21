import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collapse, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAdmin: boolean = false;
  role = localStorage.getItem('role');
  isLoggedIn = localStorage.getItem('isLoggedIn');


  constructor(router: Router) {
     console.log(this.isLoggedIn);
  }

  ngOnInit(): void {}
  logout() {
    console.log('sdasds');

    localStorage.clear();
    window.location.href = '/';
    
  }
}

import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserLogin } from '../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userData: UserLogin = {
    email: '',
    password: '',
  };

  constructor(private router: Router, private api: UserService) {}

  onSubmit() {
    if (this.userData.email.trim() === '') {
      alert('email is required');
      return;
    }
    if (this.userData.password.trim() === '') {
      alert('password is required');
      return;
    }

    const userData = {
      email: this.userData.email,
      password: this.userData.password,
    };

    this.api.login(this.userData).then((data: any) => {
      localStorage.setItem('token', data.token);
      // console.log(data);
      try {
        this.api.checkUserDetails(data.token).then((data: any) => {
          // console.log(data);
          if (data.role === 'user') {
            localStorage.setItem('name', data.name);
            this.router.navigate(['/user']);
          }
          if (data.role === 'admin') {
            localStorage.setItem('name', data.name);
            this.router.navigate(['/admin']);
          }
        });
      } catch (error: any) {
        console.log(error);
      }
    });
  }

  navigateToRegister = () => {
    this.router.navigate(['/register']);
  };
}



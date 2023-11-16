import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserRegister } from '../interface/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  userData: UserRegister = {
    email: '',
    password: '',
    fullname: '',
  };
  pwd: {
    confirmPassword: string;
  } = {
    confirmPassword: '',
  };

  constructor(private router: Router, private api: UserService) {}
  onSubmit() {
    if (this.userData.fullname.trim() === '') {
      alert('Name is required');
      return;
    }
    if (this.userData.email.trim() === '') {
      alert('email is required');
      return;
    }
    if (this.userData.password.trim() === '') {
      alert('password is required');
      return;
    }
    if (this.userData.password != this.pwd.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      fullname: this.userData.fullname,
      email: this.userData.email,
      password: this.userData.password,
      role: 'admin',
    };

    this.api.register(this.userData).then(
      (data) => {
        console.log(userData);
        alert('User registered successfully');
        // alert('Admin registered successfully');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        alert('User already exists');
      }
    );
  }
  navigateToLogin = () => {
    this.router.navigate(['/login']);
  };
}

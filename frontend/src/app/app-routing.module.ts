import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToursComponent } from './tours/tours.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { EdittourmodalComponent } from './edittourmodal/edittourmodal.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'users', component: UsersComponent },
  { path: 'user', component: UsersComponent },
  { path: 'tour', component: EdittourmodalComponent },
  {path: '',component: BookingsComponent},
  
  { path: '', redirectTo: '/my-bookings', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

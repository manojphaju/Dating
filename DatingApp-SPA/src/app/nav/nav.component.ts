import { Component, OnInit, Attribute } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successful');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    // before token expiration
    // const token = localStorage.getItem('token');
    // return !!token;  // returns true or false
    // check token expiration
    return this.authService.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
   this.alertify.message('loggged out');
  }

}

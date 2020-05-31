import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('success');
    }, error => {
      console.log('error');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;  // returns true or false
  }

  logOut() {
    localStorage.removeItem('token');
    console.log('loggged out');
  }

}

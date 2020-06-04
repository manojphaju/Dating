import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodeToken: any;

  constructor(private http: HttpClient) { }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        localStorage.setItem('token', user.token);
        this.decodeToken = this.jwtHelper.decodeToken(user.token);
      })
      );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);  // returns true or false
  }

}

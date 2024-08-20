import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../app.backend';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiURL = environment.url;
  constructor(private http: HttpClient) {}

  logInHandler(data: any) {
    return this.http.post(`${this.apiURL}/user/loginUser`, data);
  }

  signupHandler(data: any) {
    return this.http.post(`${this.apiURL}/user/createUser`, data);
  }
}

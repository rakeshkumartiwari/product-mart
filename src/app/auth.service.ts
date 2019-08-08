import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log('Login Credentials ', loginCredentials)
    return of(loginCredentials);
  }

  constructor() { }


}

import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }

  private user$ = new Subject<User>();

  logOut() {
    // remove user from subject
    this.setUser(null);
    console.log(`user did logout successfully.`);
  }

  get user() {
    return this.user$.asObservable();
  }

  private setUser(user) {
    this.user$.next(user);
  }

  register(user: any) {
    // make a api call to save user in db
    // update the user suject
    this.setUser(user);
    console.log(`register user successfully.`, user);
    return of(user);
  }
  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log('Login Credentials ', loginCredentials);
    return of(loginCredentials);
  }



}

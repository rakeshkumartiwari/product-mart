import { Injectable } from '@angular/core';
import { of, Subject, Observable, throwError, BehaviorSubject } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { User } from './User';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  private user$ = new BehaviorSubject<User>(null);

  private baseUrl = '/api/auth';

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
    return this.http.post<User>(`${this.baseUrl}/register`, user).pipe(
      switchMap(savedUser => {
        this.setUser(savedUser);
        console.table(savedUser);
        return of(savedUser);
      }),
      catchError(err => {
        console.log('Error occered: ', err);
        return throwError('some error occered please contact with admin');
      })
    );
  }
  login(email: string, password: string) {
    const loginCredentials = { email, password };
    console.log('Login Credentials ', loginCredentials);
    return of(loginCredentials);
  }



}

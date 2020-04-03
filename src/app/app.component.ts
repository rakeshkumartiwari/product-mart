import { Component, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from './User';
import { Subscription } from 'rxjs';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'product-mart';
  user: User;
  userSubscription: Subscription;
  constructor(private router: Router, private authService: AuthService) {
    this.userSubscription = this.authService.user.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['/']);
  }

}

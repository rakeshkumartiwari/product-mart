import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  register() {
    this.router.navigate(['/login']);
  }
}

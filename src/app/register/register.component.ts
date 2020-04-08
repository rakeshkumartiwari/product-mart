import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userGroup: FormGroup;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.userGroup = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required])
    });
  }
  register() {
    const user = this.userGroup.getRawValue();
    this.authService
      .register(user)
      .subscribe(() => this.router.navigate(['/login']));
    console.log(this.userGroup);

  }

  get fullName() {
    return this.userGroup.get('fullName');
  }

  get password() {
    return this.userGroup.get('password');
  }

}

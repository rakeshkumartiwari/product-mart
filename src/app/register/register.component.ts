import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth.service';

function checkPassword(control: AbstractControl): { [key: string]: boolean } | null {
  if (control && control.value !== '') {
    const password = control.root.get('password');
    if (password.value !== control.value) {
      return { match: true };
    }
  }
  return null;
}

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userGroup: FormGroup;
  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit() {
    this.userGroup = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
      password: ['', [Validators.required]],
      repeatPassword: ['', [Validators.required, checkPassword]]
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

  get repeatPassword() {
    return this.userGroup.get('repeatPassword');
  }

  get email() {
    return this.userGroup.get('email');
  }

}

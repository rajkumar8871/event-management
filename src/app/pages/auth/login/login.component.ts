import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Regex } from '../../../constants';

interface Login {
  mobile: string;
  otp: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  form: FormGroup;
  isOtpBox: boolean = false;
  submitted = false;

  constructor(private fb: FormBuilder,
    private router: Router,
     private authService: AuthService) {
    this.form = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(Regex.digit), Validators.minLength(10)]],
      otp: ['']
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) return;

    if (!this.isOtpBox) {
      this.submitted = false;
      this.form.get('otp')?.setValidators([Validators.required, Validators.minLength(6)])
      this.form.get('otp')?.updateValueAndValidity();
      this.isOtpBox = true;
    } else {
      this.authService.login(this.form.value.mobile);
      this.router.navigate(['/']);
    }

  }

}

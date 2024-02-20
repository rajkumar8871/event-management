import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { LocalStorage } from '../../../constants';

@Injectable({ providedIn: 'root' })

export class AuthService {

  private userSubject = new BehaviorSubject<string | null>(null);

  constructor(private router: Router) {
    const token = localStorage.getItem(LocalStorage.Auth);
    this.userSubject = new BehaviorSubject(token);
  }

  changeAuthValues(mobile: number | null) {
    this.userSubject.next(`${mobile}`);
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(mobile: number) {
    localStorage.setItem(LocalStorage.Auth, `${mobile}`);
    this.changeAuthValues(mobile);
  }

  logout() {
    localStorage.removeItem(LocalStorage.Auth);
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

}

import { Component } from '@angular/core';

import { AuthService } from '../../pages/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public authService: AuthService) { 
  }
  
  logout() {
    this.authService.logout();
  }

}
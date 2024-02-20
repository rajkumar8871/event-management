import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderModule } from './themes/header/header.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderModule],
  template: `<app-header/><router-outlet/>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'event-management';
}

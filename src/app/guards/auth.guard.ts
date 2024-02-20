import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../pages/auth/services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const user = inject(AuthService).userValue;
  if (user) {
    return true;
  }
  inject(Router).navigate(['/login']);
  return false;
};

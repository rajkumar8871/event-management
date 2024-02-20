import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '../pages/auth/services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const user = inject(AuthService).userValue;
  if (user) {
    inject(Router).navigate(['/']);
    return false;
  }
  return true;
};

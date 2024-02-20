import { Routes } from '@angular/router';

import { authGuard, noAuthGuard } from './guards';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/events/events.module').then(mod => mod.EventsModule), canActivate: [authGuard] },
    { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(mod => mod.LoginModule), canActivate: [noAuthGuard] },
    { path: '**', loadChildren: () => import('./common/not-found/not-found.module').then(mod => mod.NotFoundModule) }
];

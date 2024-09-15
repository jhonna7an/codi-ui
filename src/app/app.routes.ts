import { Route } from '@angular/router';
import { CODI_ROUTES } from '@codi-front/codi-plus-shell';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full'
  },
  ...CODI_ROUTES
];

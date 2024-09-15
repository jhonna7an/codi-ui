/* eslint-disable @nx/enforce-module-boundaries */
import { Routes } from '@angular/router';
// import { AppEnum } from '@codi-front/data-access/models';

export const CODI_ROUTES: Routes = [
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       path: 'signIn',
  //       loadComponent: () => import('@codi-front/shared/features/sign-in').then(c => c.SignInComponent)
  //     }
  //   ]
  // },
  {
    path: 'pddu',
    children: [
      {
        path: 'diagnostic',
        loadComponent: () => import('@codi-front/shared/features/diagnostics').then(c => c.DiagnosticDetailComponent),
        data: {
          // appId: AppEnum.Codi
        }
      },
      // {
      //   path: 'closing-screen',
      //   loadComponent: () => import('@codi-front/codi/features/closing-crm').then(c => c.ClosingCrmComponent),
      //   data: {
      //     appId: AppEnum.Codi
      //   }
      // }
    ]
  },
]
import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  // {
  //   path: 'account',
  //   loadComponent: () => import('./tabs/profile/profile.page').then( m => m.ProfilePage)
  // },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then( m => m.routes)
  },
];

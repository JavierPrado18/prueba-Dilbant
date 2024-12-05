import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: LayoutComponent,
    loadChildren: () => import('./pages/pages.routes').then((m) => m.routes),
  },
  {
    path: '**',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'pages',
    pathMatch: 'full',
  },
];

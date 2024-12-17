import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'button',
    loadComponent: () => import('./button/button.page').then( m => m.ButtonPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'icon',
    loadComponent: () => import('./icon/icon.page').then( m => m.IconPage)
  },
  {
    path: 'input',
    loadComponent: () => import('./input/input.page').then( m => m.InputPage)
  },
  {
    path: 'list',
    loadComponent: () => import('./list/list.page').then( m => m.ListPage)
  },
  {
    path: 'model',
    loadComponent: () => import('./model/model.page').then( m => m.ModelPage)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./alerts/alerts.page').then( m => m.AlertsPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.page').then( m => m.CardPage)
  },
  {
    path: 'grid',
    loadComponent: () => import('./grid/grid.page').then( m => m.GridPage)
  },
];

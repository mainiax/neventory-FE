import { CanMatchFn, Routes } from '@angular/router';

import { _authRequired } from '../guards/auth-required.guard';

import { AppShell } from '../../app-shell';
export const AppShellRoutes: Routes = [
  {
    path: 'app',
    component: AppShell,
    canMatch: [_authRequired],
    children: [
    {
  path: 'dashboard',
  loadComponent: () =>
    import('../../modules/dashboard/pages/dashboard-component/dashboard-component')
      .then(m => m.DashboardComponent),
},
{
  path: 'alert-thresholds',
  loadComponent: () =>
    import('../../modules/alerts_thresholds/pages//alerts-threshold-component/alerts-threshold-component')
      .then(m => m.AlertsThresholdComponent),
},
{
  path: 'inventory',
  loadComponent: () =>
    import('../../modules/inventory/pages/inventory-component/inventory-component')
      .then(m => m.InventoryComponent),
},
{
  path: 'stock',
  loadComponent: () =>
    import('../../modules/stock/pages/stock-component/stock-component')
      .then(m => m.StockComponent),
},
{
  path: 'reports',
  loadComponent: () =>
    import('../../modules/reports/pages/reports-component/reports-component')
      .then(m => m.ReportsComponent),
},
{
  path: 'settings',
  loadComponent: () =>
    import('../../modules/settings/pages//settings-component/settings-component')
      .then(m => m.SettingsComponent),
},


      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
    ],
  },
];

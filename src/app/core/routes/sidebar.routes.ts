export interface SidebarRoute {
  label: string;
  path: string;
  icon?: string;
  children?: SidebarRoute[];
  roles?: Array<'ADMIN' | 'STAFF' | 'ACCESS'>;
}

export const SIDEBAR_ROUTES: SidebarRoute[] = [
  {
    label: 'Dashboard',
    path: '/app/dashboard',
    icon: 'lucideLayoutDashboard',
  },

  {
    label: 'Stock',
    path: '/app/stock',
    icon: 'lucidePackage',
  },
  {
    label: 'Inventory',
    path: '/app/inventory',
    icon: 'lucideDatabase',
  },
  {
    label: 'Reports',
    path: '/app/reports',
    icon: 'lucideChartBar',
    roles: ['ADMIN'],
  },
  {
    label: 'Settings',
    path: '/app/settings',
    icon: 'lucideSettings',
    children: [
      {
        label: 'Accessibility',
        path: '/app/settings/accessibility',
        icon: 'lucideAccessibility',
      },
    ],
  },
];

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
    icon: 'dashboard',
  },

  {
    label: 'Stock',
    path: '/app/stock',
    icon: 'stock',
  },
  {
    label: 'Inventory',
    path: '/app/inventory',
    icon: 'inventory',
  },
  {
    label: 'Reports',
    path: '/app/reports',
    icon: 'chart',
    roles: ['ADMIN'],
  },
  {
    label: 'Settings',
    path: '/app/settings',
    icon: 'settings',
    children: [
      {
        label: 'Accessibility',
        path: '/app/settings/accessibility',
      },
    ],
  },
];

export const menuGroups = [
  {
    label: 'My Account',
    items: [
      { key: 'profile', label: 'Profile', icon: 'lucideUser', shortcut: '⇧⌘P' },
      { key: 'billing', label: 'Billing', icon: 'lucideCreditCard', shortcut: '⌘B' },
      { key: 'settings', label: 'Settings', icon: 'lucideCog', shortcut: '⌘S' },
    ],
  },
  {
    label: null,
    items: [{ key: 'support', label: 'Support', icon: 'lucideCircleHelp', shortcut: '⌘/' }],
  },
];

export const logoutItem = {
  key: 'logout',
  label: 'Log out',
  icon: 'lucideLogOut',
  shortcut: '⇧⌘Q',
};

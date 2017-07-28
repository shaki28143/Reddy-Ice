import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Home',  icon: 'home', class: '' },
    { path: 'customer', title: 'Customer Management',  icon:'group', class: '' },
    { path: 'user', title: 'User Management',  icon:'person', class: '' },    
    { path: 'reconciliation', title: 'Reconcilation',  icon:'content_paste', class: '' },
    { path: 'typography', title: 'Manual Ticket',  icon:'library_books', class: '' },
    { path: 'report', title: 'Report',  icon:'assessment', class: '' },
    
    { path: 'notifications', title: 'Tracker',  icon:'notifications', class: '' }
];

import {  RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Home',  icon: 'home', class: '' },
    { path: 'customer', title: 'Customer Management',  icon:'group', class: '' },
    { path: 'user', title: 'User Management',  icon:'person', class: '' },    
    { path: 'reconciliation', title: 'Reconciliation',  icon:'content_paste', class: '' },
    { path: 'manual-tickets', title: 'Manual Ticket',  icon:'library_books', class: '' },
    { path: 'report', title: 'Reports',  icon:'assessment', class: '' },   
    { path: 'tracker', title: 'Tracker',  icon:'notifications', class: '' }
];

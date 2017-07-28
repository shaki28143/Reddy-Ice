import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';
import { TableComponent } from './table/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { CustomerComponent } from './customer/customer.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const MODULE_ROUTES: Route[] =[
    {path:'', component:DashboardComponent, children:[
        { path: 'dashboard', component: HomeComponent },
        { path: 'user', component: UserComponent },
        { path: 'table', component: TableComponent },
        { path: 'icons', component: IconsComponent },
        { path: 'notifications', component: NotificationsComponent },
        { path: 'typography', component: TypographyComponent },
        { path: 'customer', component: CustomerComponent },
        { path: 'upgrade', component: UpgradeComponent },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]}
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    CustomerComponent,
    UpgradeComponent,
    DashboardComponent
]

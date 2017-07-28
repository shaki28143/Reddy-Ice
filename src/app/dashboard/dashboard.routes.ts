import { ReportComponent } from './report/report.component';
import { CustomerDetail } from './customer/customer-details/customer-detail.component';
import { CustomerManagementComponent } from './customer/customer-management/customer-management.component';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';

import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { CustomerComponent } from './customer/customer.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

export const MODULE_ROUTES: Route[] = [
    {
        path: '', component: DashboardComponent, children: [
            { path: 'dashboard', component: HomeComponent },
            { path: 'user', component: UserComponent },
            { path: 'report', component: ReportComponent },
            { path: 'icons', component: IconsComponent },
            { path: 'tracker', component: NotificationsComponent },
            { path: 'manual-tickets', component: TypographyComponent },
            {
                path: 'customer', component: CustomerComponent, children: [
                    { path: '', component: CustomerManagementComponent },
                    { path: 'add', component: CustomerDetail },
                    { path: 'edit', component: CustomerDetail }
                ]
            },
            { path: 'upgrade', component: UpgradeComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    ReportComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    CustomerComponent,
    UpgradeComponent,
    DashboardComponent,
    CustomerManagementComponent,
    CustomerDetail
]

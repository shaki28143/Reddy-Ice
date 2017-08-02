import { ReportComponent } from './report/report.component';
import { CustomerDetail } from './customer/customer-details/customer-detail.component';
import { CustomerManagementComponent } from './customer/customer-management/customer-management.component';
import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { IconsComponent } from './icons/icons.component';

import { TableComponent } from './reconciliation/table.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ManualTicketsComponent } from './manual-tickets/manual-tickets.component';
import { TicketManagementComponent } from './manual-tickets/ticket-management/ticket-management.component';
import { TicketDetailComponent } from './manual-tickets/ticket-details/ticket-detail.component';
import { CustomerComponent } from './customer/customer.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserManagementComponent } from './user/user-management/user-management.component';
import { AddUserComponent } from './user/user-details/user-details.component';
import { ReconciliationComponent } from './reconciliation/reconciliation/reconciliation.component';
import { ReconciliationCashComponent } from './reconciliation/reconciliation-cash/reconciliation-cash.component'
export const MODULE_ROUTES: Route[] = [
    {
        path: '', component: DashboardComponent, children: [
            { path: 'dashboard', component: HomeComponent },

            {
                path: 'user', component: UserComponent, children: [
                    { path: '', component: UserManagementComponent },
                    { path: 'add-user', component: AddUserComponent},
                    {path: 'edit/:id', component: AddUserComponent, data:{
                        isEdit: true
                    } }
                ]
            },
            {
                path: 'reconciliation', component: TableComponent, children: [
                    { path: '', component: ReconciliationComponent },
                    { path: 'cash', component: ReconciliationCashComponent }
                ]
            },
            { path: 'report', component: ReportComponent },
            { path: 'icons', component: IconsComponent },
            { path: 'tracker', component: NotificationsComponent },
            { path: 'manual-tickets', component: ManualTicketsComponent, children: [
                    { path: '', component: TicketManagementComponent },
                    { path: 'add', component: TicketDetailComponent },
                ]
            },
            {
                path: 'customer', component: CustomerComponent, children: [
                    { path: '', component: CustomerManagementComponent },
                    { path: 'add', component: CustomerDetail },
                    { path: 'edit/:id', component: CustomerDetail }
                ]
            },
            { path: 'upgrade', component: UpgradeComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    }
];

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    ReportComponent,
    IconsComponent,
    NotificationsComponent,
    ManualTicketsComponent,
    TicketManagementComponent,
    TicketDetailComponent,
    CustomerComponent,
    UpgradeComponent,
    DashboardComponent,
    CustomerManagementComponent,
    CustomerDetail,
    UserManagementComponent,
    AddUserComponent,
    ReconciliationComponent,
    ReconciliationCashComponent,
    TableComponent
];

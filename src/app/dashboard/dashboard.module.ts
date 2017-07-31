import { CustomerService } from './customer/customer.service';
import { Common } from '../shared/common/common.module';
import { ChartModule } from '../shared/charts/chart.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component'
import { ReconciliationService } from './reconciliation/reconciliation.service';
import {UserService} from './user/user.service';

@NgModule({
    imports: [
        ChartModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        Common,
        CommonModule,
        FormsModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [MODULE_COMPONENTS],
    providers: [CustomerService,ReconciliationService,UserService]

})

export class DashboardModule { }

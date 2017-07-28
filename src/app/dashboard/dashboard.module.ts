import { Common } from '../shared/common/common.module';
import { ChartModule } from '../shared/charts/chart.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';
import {DashboardComponent} from './dashboard.component'

@NgModule({
    imports: [
        ChartModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        Common,
        CommonModule,
        RouterModule.forChild(MODULE_ROUTES)
    ],
    declarations: [ MODULE_COMPONENTS ]

})

export class DashboardModule{}

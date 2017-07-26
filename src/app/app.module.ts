import { DashboardComponent } from './dashboard/dashboard.component';
import { HashLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { SidebarModule } from './sidebar/sidebar.module';
//import { DashboardModule } from './dashboard/dashboard.module';


import { AppComponent } from './app.component';


const MODULE_ROUTES: Route[] =[
    { path: 'login', loadChildren:'./login/login.module#LoginModule' },
    { path: '', loadChildren:'./dashboard/dashboard.module#DashboardModule' }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(MODULE_ROUTES)
  ],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

const MODULE_ROUTES: Route[] =[
    { path: 'login', loadChildren:'./login/login.module#LoginModule' },
    { path: 'home',  loadChildren:'./dashboard/dashboard.module#DashboardModule' },
    { path:'', redirectTo:'home', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(MODULE_ROUTES)
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }

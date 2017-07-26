import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {SignInComponent} from './sign-in/sign-in.component';

const MODULE_ROUTES: Route[] =[
    { path: '', component: SignInComponent }
]

@NgModule({
    declarations:[SignInComponent],
    imports:[
        RouterModule.forChild(MODULE_ROUTES)
    ]
})
export class LoginModule{

}


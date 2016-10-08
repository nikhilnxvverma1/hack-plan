import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in.component.ts'
import {NewAccountComponent} from './new-account.component.ts'
@NgModule({
    imports: [
        RouterModule.forRoot([

        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}
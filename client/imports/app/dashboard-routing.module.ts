import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in.component.ts'
import {NewAccountComponent} from './new-account.component.ts'
import {TeamListComponent} from "./team-list.component";
import {ParticipantListComponent} from "./participant-list.component";
import {PlannerComponent} from "./planner.component";
import {DashboardComponent} from "./dashboard.component";
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path:'dashboard',
                component:DashboardComponent,
                children:[
                    {
                        path:'participants',
                        component:ParticipantListComponent
                    },
                    {
                        path:'teams',
                        component:TeamListComponent
                    },
                    {
                        path:'planner',
                        component:PlannerComponent
                    }
                ]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}
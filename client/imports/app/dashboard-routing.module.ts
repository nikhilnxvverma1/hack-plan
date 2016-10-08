import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in.component.ts'
import {NewAccountComponent} from './new-account.component.ts'
import {TeamListComponent} from "./team-list.component";
import {ParticipantListComponent} from "./participant-list.component";
import {PlannerComponent} from "./planner.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            {path:'dashboard/participants',component:ParticipantListComponent},
            {path:'dashboard/teams/..',component:TeamListComponent,pathMatch:'prefix'},
            {path:'dashboard/planner',component:PlannerComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class DashboardRoutingModule {}
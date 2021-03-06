import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import {SignInComponent} from './sign-in.component';
import {NewAccountComponent} from './new-account.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";
import {HeaderComponent} from "./header.component";
import {SidebarComponent} from "./sidebar.component";
import {ParticipantListComponent} from "./participant-list.component";
import {TeamComponent} from "./team.component";
import {PlannerComponent} from "./planner.component";
import {TeamListComponent} from "./team-list.component";
import {TimeFromHourNumber} from "./pipe/time-from-hour-no.pipe";
import {TaskListComponent} from "./task-list.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
        ParticipantListComponent,
        TeamListComponent,
        PlannerComponent,
        TimeFromHourNumber,
        TaskListComponent
    ]
})
export class DashboardModule {}
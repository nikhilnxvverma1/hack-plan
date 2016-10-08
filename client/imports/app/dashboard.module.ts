import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import {SignInComponent} from './sign-in.component';
import {NewAccountComponent} from './new-account.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {DashboardComponent} from "./dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import {SignInComponent} from './sign-in.component';
import {NewAccountComponent} from './new-account.component';
import {DashboardModule} from './dashboard.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from "./alert.component";
import 'materialize-css';
import 'angular2-materialize';
import {MaterializeDirective} from "angular2-materialize";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        DashboardModule
    ],
    declarations: [
        AppComponent,
        SignInComponent,
        NewAccountComponent,
        AlertComponent,
        MaterializeDirective
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
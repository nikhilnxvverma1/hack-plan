import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import {SignInComponent} from './sign-in.component';
import {NewAccountComponent} from './new-account.component';
import {DashboardModule} from './dashboard.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertComponent} from "./alert.component";

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
        AlertComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
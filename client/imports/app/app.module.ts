import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule }  from './app-routing.module';
import {SignInComponent} from './sign-in.component';
import {NewAccountComponent} from './new-account.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        SignInComponent,
        NewAccountComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
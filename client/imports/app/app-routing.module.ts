import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import {SignInComponent} from './sign-in.component.ts'
import {NewAccountComponent} from './new-account.component.ts'
import {DashboardComponent} from "./dashboard.component";
@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '',  component: SignInComponent},
      { path: 'signUp',  component: NewAccountComponent },
      { path: 'dashboard', component: DashboardComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
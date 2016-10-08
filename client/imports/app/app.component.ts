import { Component, Directive, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterModule} from '@angular/router';
import {SignInComponent} from './sign-in.component';
import template from './template/app.component.html';

@Component({
    selector: 'app',
    styleUrls:['app.component.css'],
    template
})
export class AppComponent {    

    constructor(){        
    }
}
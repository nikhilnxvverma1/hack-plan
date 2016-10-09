import {Component,OnInit} from '@angular/core';
import template from './template/alert.component.html';

@Component({
    selector: 'alert',
    inputs: ['message'],
    template
})

export class AlertComponent implements OnInit{
    public message = {
    'header': 'Hello',
    'text': 'This is some text'
    }
    ngOnInit(){
    }
}

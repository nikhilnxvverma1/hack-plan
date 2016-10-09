import { Component, Directive, Output, EventEmitter } from '@angular/core';
import template from './template/planner.component.html';
import { dummyEvent } from '../../../both/dummy/dummy-data';

@Component({
    selector: 'planner',
    template
})
export class PlannerComponent {

    eventPlan=dummyEvent;

    constructor(){
    }
}

//class Event{
//    name:string;
//    venue:string;
//
//}
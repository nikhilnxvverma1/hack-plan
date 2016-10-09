import { Component, Directive, Output, EventEmitter } from '@angular/core';
import template from './template/planner.component.html';
import { dummyEvent } from '../../../both/dummy/dummy-data';
import {TimeFromHourNumber} from "./pipe/time-from-hour-no.pipe";

@Component({
    selector: 'planner',
    template
    //templateUrl:'./template/planner.component.html'
})
export class PlannerComponent {

    fixedStep=75;//30px means one hour
    offset=100;

    eventPlan=dummyEvent;
    hours:number[];
    constructor(){
        this.hours=Array(this.eventPlan.duration).fill().map((x,i)=>i);
    }
}

//class Event{
//    name:string;
//    venue:string;
//
//}
import { Component, Directive, Output, EventEmitter } from '@angular/core';
import template from './template/planner.component.html';
import { dummyEvent } from '../../../both/dummy/dummy-data';
import {TimeFromHourNumber} from "./pipe/time-from-hour-no.pipe";
import {dummyProject} from "../../../both/dummy/dummy-data";

@Component({
    selector: 'planner',
    template
    //templateUrl:'./template/planner.component.html'
})
export class PlannerComponent {

    showTaskList=false;

    fixedStep=75;//30px means one hour
    offset=80;

    eventPlan=dummyEvent;
    project=dummyProject;
    hours:number[];
    constructor(){
        this.hours=Array(this.eventPlan.duration).fill().map((x,i)=>i);
    }

    doShowTaskList(){
        console.log("toggline task list form");
        this.showTaskList=!this.showTaskList;
    }
}

import { Component, Directive, Output, EventEmitter,ViewChild } from '@angular/core';
import template from './template/planner.component.html';
import { dummyEvent } from '../../../both/dummy/dummy-data';
import {TimeFromHourNumber} from "./pipe/time-from-hour-no.pipe";
import {dummyProject} from "../../../both/dummy/dummy-data";
import {TaskListComponent} from "./task-list.component";

@Component({
    selector: 'planner',
    template
    //templateUrl:'./template/planner.component.html'
})
export class PlannerComponent {

    showTaskList=false;

    fixedStep=75;//30px means one hour
    headerHeight=50;
    offset=80;

    eventPlan=dummyEvent;
    project=dummyProject;
    hours:number[];
    trackY:number;
    trackedTask=null;
    topHandle=false;

    @ViewChild(TaskListComponent) taskList:TaskListComponent;

    constructor(){
        this.hours=Array(this.eventPlan.duration).fill().map((x,i)=>i);
    }

    doShowTaskList(task){
        this.taskList.task=task;
        this.showTaskList=true;
    }

    handleDown(event:MouseEvent,top:boolean,task){

        this.trackY=event.clientY;
        this.trackedTask=task;
        this.topHandle=top;
        console.log("handle down "+this.trackY);
    }

    handleDrag(event:MouseEvent){// its just a move not a drag technincally
        //only if left button is pressed
        if (event.buttons == 1) {
            var totalHeight=this.eventPlan.duration*this.fixedStep;


            if (this.trackedTask!=null) {
                if (this.topHandle) {
                    var currentStart = this.trackedTask.start * this.fixedStep;
                    var dy = event.clientY - this.trackY;
                    console.log("dy " + dy);
                    var yInHourView = (currentStart + dy);
                    var fraction = (yInHourView / totalHeight) * this.eventPlan.duration;
                    console.log("task start " + this.trackedTask.start + " new " + fraction);
                    if(this.trackedTask.end-fraction>0.5){
                        this.trackedTask.start = fraction;
                    }

                } else {
                    var currentEnd = this.trackedTask.end * this.fixedStep;
                    var dy = event.clientY - this.trackY;
                    var yInHourView = (currentEnd + dy);
                    var fraction = (yInHourView / totalHeight) * this.eventPlan.duration;
                    console.log("task start " + this.trackedTask.end + " new " + fraction);
                    if (fraction-this.trackedTask.start>0.5) {
                        this.trackedTask.end = fraction;
                    }
                }
            }

            this.trackY=event.clientY;

        }
    }

    handleUp(event:MouseEvent){
        this.trackedTask=null;
        console.log("handle up "+top);
    }
}

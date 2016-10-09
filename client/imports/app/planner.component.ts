import { Component, Directive, Output,OnInit, EventEmitter,ViewChild } from '@angular/core';
import template from './template/planner.component.html';
import { dummyEvent } from '../../../both/dummy/dummy-data';
import {TimeFromHourNumber} from "./pipe/time-from-hour-no.pipe";
import {dummyProject} from "../../../both/dummy/dummy-data";
import {TaskListComponent} from "./task-list.component";
//import {Planner} from '../../../both/collections/planner.collection';
import {Participants} from "../../../both/collections/participants.collection";
import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';
@Component({
    selector: 'planner',
    template
    //templateUrl:'./template/planner.component.html'
})
export class PlannerComponent implements OnInit{

    showTaskList=false;

    fixedStep=75;//30px means one hour
    headerHeight=50;
    offset=80;

    eventPlan=dummyEvent;
    //project=dummyProject;
    project=null;
    hours:number[];
    trackY:number;
    trackedParticipant=null;
    trackedTask=null;
    topHandle=false;
    usingHandle=false;

    @ViewChild(TaskListComponent) taskList:TaskListComponent;

    constructor(){
        this.hours=Array(this.eventPlan.duration).fill().map((x,i)=>i);
    }

    ngOnInit(){
        //Planner.insert(dummyProject);
        var Planner=new MongoObservable.Collection('Planner');
        Planner.insert(dummyProject);
        console.log(" inserted document");
        this.project=Planner.find();
    }

    doShowTaskList(task){
        this.taskList.task=task;
        this.showTaskList=true;
    }

    createTaskBlock(event:MouseEvent,participant){
        var totalHeight=this.eventPlan.duration*this.fixedStep;
        var yInHourView = event.clientY-this.offset-this.headerHeight
        var start= (yInHourView / totalHeight) * this.eventPlan.duration;

        var end=start + 1;
        var newTask={
            name:"New Task",
            start:start,
            end:end,
            completion:-1,
            completed:0,
            taskList:[
                {
                    name:"Complete this task",
                    done:false
                }
            ]

        };
        participant.tasks.push(newTask);
        this.pushTasksDownIfOverlapping(participant,newTask);
    }

    handleDown(event:MouseEvent,top:boolean,usingHandle:boolean,task,participant){

        this.trackY=event.clientY;
        this.trackedTask=task;
        this.trackedParticipant=participant;
        this.topHandle=top;
        this.usingHandle=usingHandle;
        console.log("handle down "+this.trackY);
    }

    handleDrag(event:MouseEvent){// its just a move not a drag technincally
        //only if left button is pressed
        if (event.buttons == 1) {
            var totalHeight=this.eventPlan.duration*this.fixedStep;


            if (this.trackedTask!=null) {


                if (this.usingHandle) {
                    if (this.topHandle) {
                        var currentStart = this.trackedTask.start * this.fixedStep;
                        var dy = event.clientY - this.trackY;
                        console.log("dy " + dy);
                        var yInHourView = (currentStart + dy);
                        var fraction = (yInHourView / totalHeight) * this.eventPlan.duration;
                        console.log("task start " + this.trackedTask.start + " new " + fraction);
                        if (this.trackedTask.end - fraction > 0.5) {
                            if (this.isStartOfTaskMakingOverlapWithOtherTasks(this.trackedParticipant, this.trackedTask)) {

                                if (fraction > this.trackedTask.start) {//allow increasing start time
                                    this.trackedTask.start = fraction;
                                }
                            } else {
                                this.trackedTask.start = fraction;
                            }
                        }

                    } else {
                        var currentEnd = this.trackedTask.end * this.fixedStep;
                        var dy = event.clientY - this.trackY;
                        var yInHourView = (currentEnd + dy);
                        var fraction = (yInHourView / totalHeight) * this.eventPlan.duration;
                        console.log("task start " + this.trackedTask.end + " new " + fraction);
                        if (fraction - this.trackedTask.start > 0.5) {
                            this.trackedTask.end = fraction;
                            this.pushTasksDownIfOverlapping(this.trackedParticipant, this.trackedTask);
                        }
                    }
                }else{
                    var dy = event.clientY - this.trackY;
                    var unitsToShift=(dy * this.eventPlan.duration)/totalHeight;
                    console.log("units to shift "+unitsToShift);

                    var newStart = this.trackedTask.start+unitsToShift;
                    var newEnd = this.trackedTask.end+unitsToShift;

                    if (this.isStartOfTaskMakingOverlapWithOtherTasks(this.trackedParticipant, this.trackedTask)) {

                        if (newStart > this.trackedTask.start) {//allow increasing start time
                            this.trackedTask.start= newStart;
                            this.trackedTask.end= newEnd;
                        }
                    } else {
                        this.trackedTask.start= newStart;
                        this.trackedTask.end= newEnd;
                    }



                    this.pushTasksDownIfOverlapping(this.trackedParticipant, this.trackedTask);

                }
            }

            this.trackY=event.clientY;

        }
    }

    handleUp(event:MouseEvent){
        this.trackedTask=null;
        this.trackedParticipant=null;
        console.log("handle up "+top);
    }

    pushTasksDownIfOverlapping(participant,task){
        var closestOverlappingTask=null;
        for(var i=0;i<participant.tasks.length;i++ ){
            var currentTask=participant.tasks[i];
            if(currentTask!=task){
                if(currentTask.start>=task.start &&currentTask.start<=task.end){
                    if (closestOverlappingTask==null||currentTask.start<closestOverlappingTask.start) {
                        closestOverlappingTask = currentTask;
                    }

                }
            }
        }

        if(closestOverlappingTask!=null){
            //create a list of all task below (and including) closestOverlappingTask
            var tasksToPushDown=[];
            tasksToPushDown.push(closestOverlappingTask);
            for(var i=0;i<participant.tasks.length;i++ ){
                var currentTask=participant.tasks[i];
                if(currentTask!=closestOverlappingTask && currentTask!=task &&currentTask.start>closestOverlappingTask.start){
                    tasksToPushDown.push(currentTask);
                }
            }

            var pushDownBy= task.end-closestOverlappingTask.start+0.1; //little gap

            for (var i=0;i<tasksToPushDown.length;i++){
                tasksToPushDown[i].start=tasksToPushDown[i].start+pushDownBy;
                tasksToPushDown[i].end=tasksToPushDown[i].end+pushDownBy;
            }
        }
    }

    isStartOfTaskMakingOverlapWithOtherTasks(participant,task):boolean{
        for(var i=0;i<participant.tasks.length;i++ ){
            var currentTask=participant.tasks[i];
            if(currentTask!=task){
                if(task.start>=currentTask.start && (task.start - currentTask.end)<=0.1){
                    return true;
                }
            }
        }
        return false;
    }
}

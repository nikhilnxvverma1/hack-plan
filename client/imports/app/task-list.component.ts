import { Component, Directive, Output, EventEmitter } from '@angular/core';
import template from './template/task-list.component.html';
import { dummyEvent } from '../../../both/dummy/dummy-data';
import {dummyProject} from "../../../both/dummy/dummy-data";

@Component({
    selector: 'task-list',
    template

})
export class TaskListComponent {


    eventPlan=dummyEvent;
    project=dummyProject;

    constructor(){

    }
}

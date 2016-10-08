import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import template from './template/new-account.component.html';
import { Participants } from '../../../both/collections/participants.collection';


@Component({
    selector: 'new-account',    
    template
})
export class NewAccountComponent implements OnInit{

    signupForm: FormGroup;

    constructor( private formBuilder: FormBuilder, private router:Router){}

    addParticipant(): void {
        if(this.signupForm.valid){
            Participants.insert(this.signupForm.value);
            this.signupForm.reset();
            console.log('added participant successfully');
            this.router.navigate(['/dashboard']);

        }
        else{
            alert('You need to fill the form yo !');
        }
    }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['',Validators.required],
            password: ['',Validators.required],
            name: ['',Validators.required],
            email: ['',Validators.required],
            university: ['',Validators.required]
        });
    }}
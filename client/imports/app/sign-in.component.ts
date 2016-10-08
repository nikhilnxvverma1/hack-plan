import {Component,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router,NavigationExtras} from '@angular/router';
import { Participants } from '../../../both/collections/participants.collection';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import template from './template/sign-in.component.html';
import undefined = Match.undefined;

@Component({
    selector: 'sign-in',    
    template
})
export class SignInComponent implements OnInit{


    signinForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router:Router){}

    login(): void {
        if(this.signinForm.valid){
            let participant = Participants.findOne(this.signinForm.value);
            if(participant === undefined){
                alert('Username or password is incorrect');
                this.signinForm.reset();
            }
            else{
                let navigationExtras: NavigationExtras = {
                    queryParams: participant._id
                };
                console.log('user logged in successfully');
                this.router.navigate(['/dashboard'],navigationExtras);
            }
        }
        else{
            alert('You need to fill the form yo !');
        }
    }

    goToSignUp(): void{
        this.router.navigate(['/signUp']);
    }

    ngOnInit() {
        this.signinForm = this.formBuilder.group({
            username: ['',Validators.required],
            password: ['',Validators.required],
        });
    }
}
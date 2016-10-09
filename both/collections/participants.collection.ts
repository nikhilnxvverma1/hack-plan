import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

export const Participants = new MongoObservable.Collection('Participants');


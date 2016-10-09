import { Pipe, PipeTransform } from '@angular/core';
/*
 * Returns a hour string for a start time and hour number specified
 */
@Pipe({name: 'timeFromHourNo'})
export class TimeFromHourNumber implements PipeTransform {
    transform(hourNumber: number,startTime:number) {
        return hourNumber+':00 AM';
    }
}

import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import flatpickr from 'flatpickr';
import { ActivatedRoute } from '@angular/router';
import { TextValueBindingResponseModel } from 'src/app/@AppService/models/common/textValueBindingResponseModel';

@Component({
  selector: 'app-cfc-calender',
  templateUrl: './cfc-calender.component.html',
  styleUrls: ['./cfc-calender.component.scss']
})
export class CfcCalenderComponent implements OnInit {

  events: CalendarEvent[] = [];

  currentYear = new Date().getFullYear();
  targetYear: number = 0;
  minDate!: string;
  maxDate!: string;
  yearsList: TextValueBindingResponseModel[] = [];;
  defaultChoosenYear: number = 1;

  constructor(private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((x) => (this.targetYear = +x['year']));
    console.log(this.events);
    
  }

  ngOnInit(): void {
    if (this.targetYear) {
      this.setMinMaxDate();
    } else {
      this.targetYear = this.currentYear
      this.fillYearsList();
      this.setMinMaxDate();
    }
  }

  fillYearsList() {
    for (let i = 0; i <= 10; i++) {
      const yearObj = {
        value: i === 0 ? 1 : i + 1,
        text: (this.currentYear + i).toString()
      };
      this.yearsList.push(yearObj);
    }
  }
  selectYear(event: any) {
    this.targetYear = +this.yearsList?.find(y => y.value == event.value)?.text!
    this.setMinMaxDate();
    this.events = [];
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date(this.targetYear.toString())),
        end: endOfDay(new Date(this.targetYear.toString())),
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  sendEvents() {
    console.log(this.events);
  }

  setMinMaxDate() {
    this.minDate = this.targetYear + "-01";
    this.maxDate = this.targetYear + "-12-31";
  }

}

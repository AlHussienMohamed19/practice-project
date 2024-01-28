import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import flatpickr from 'flatpickr';
import { ActivatedRoute } from '@angular/router';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calender-1.component.html',
  styleUrls: ['./calender-1.component.scss']
})
export class Calender1Component {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate!: Date;

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;
  previous: boolean = false;
  next: boolean = false;
  currentDate = new Date();
  currentYear = this.currentDate.getFullYear();
  targetYear: number = 0;

  constructor(private modal: NgbModal, private activeRoute: ActivatedRoute) {
    this.activeRoute.params.subscribe((x) => (this.targetYear = +x['year']));
    this.viewDate = new Date(this.targetYear.toString());
    const monthName = this.viewDate.toLocaleString('default', { month: 'long' });
    if (monthName === 'January')
      this.previous = true;
    else if (monthName === 'December')
      this.next = true;
    else {
      this.previous = false;
      this.next = false;
    }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
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
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date(this.targetYear.toString())),
        end: endOfDay(new Date(this.targetYear.toString())),
        color: colors['red'],
        actions: this.actions,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
    const dayNumber = this.viewDate.toLocaleString('default', { day: '2-digit' });
    const monthName = this.viewDate.toLocaleString('default', { month: 'long' });
    if (view == CalendarView.Day) {
      this.previous = false;
      this.next = false;
      if (dayNumber == '01' && monthName == 'January') {
        this.previous = true;
      } else if (dayNumber == '31' && monthName == 'December') {
        this.next = true;
      }
    } else if (view == CalendarView.Month) {
      this.previous = false;
      this.next = false;
      if (monthName == 'January') {
        this.previous = true;
      } else if (monthName == 'December') {
        this.next = true;
      }
    } else if (view == CalendarView.Week) {
      console.log(this.view);
      console.log(this.viewDate);
      this.previous = false;
      this.next = false;
    }
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  sendEvents() {
    console.log(this.events);
  }

  previousBtn(viewDate: Date) {
    this.next = false;
    const monthName = viewDate.toLocaleString('default', { month: 'long' });
    const dayNumber = this.viewDate.toLocaleString('default', { day: '2-digit' });
    if (this.view == CalendarView.Month) {
      if (monthName === "January")
        this.previous = true;
    } else if (this.view == CalendarView.Day) {
      console.log(this.viewDate);
      if (dayNumber == '01' && monthName === "January")
        this.previous = true;
    }
  }
  nextBtn(viewDate: Date) {
    this.previous = false;
    const monthName = viewDate.toLocaleString('default', { month: 'long' });
    const dayNumber = this.viewDate.toLocaleString('default', { day: '2-digit' });
    if (this.view == CalendarView.Month) {
      if (monthName === "December")
        this.next = true;
    } else if (this.view == CalendarView.Day) {
      console.log(this.viewDate);
      if (dayNumber == '31' && monthName === "December")
        this.next = true;
    }
  }
}

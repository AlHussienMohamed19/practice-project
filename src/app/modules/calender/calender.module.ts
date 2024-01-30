import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { CalenderIndexComponent } from './calender-index/calender-index.component';
import { Calender1Component } from './calender-1/calender-1.component';
import { CfcCalenderComponent } from './cfc-calender/cfc-calender.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    CalenderComponent,
    CalenderIndexComponent,
    Calender1Component,
    CfcCalenderComponent
  ],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CalenderModule { }

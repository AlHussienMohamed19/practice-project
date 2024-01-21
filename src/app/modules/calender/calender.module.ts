import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { CalenderComponent } from './calender.component';
import { CalenderIndexComponent } from './calender-index/calender-index.component';
import { Calender1Component } from './calender-1/calender-1.component';


@NgModule({
  declarations: [
    CalenderComponent,
    CalenderIndexComponent,
    Calender1Component
  ],
  imports: [
    CommonModule,
    CalenderRoutingModule
  ]
})
export class CalenderModule { }

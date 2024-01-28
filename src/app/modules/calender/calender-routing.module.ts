import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderIndexComponent } from './calender-index/calender-index.component';
import { Calender1Component } from './calender-1/calender-1.component';
import { CfcCalenderComponent } from './cfc-calender/cfc-calender.component';

const routes: Routes = [
  {
    path: 'index',
    component: CalenderIndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'calender1/:year',
    component: Calender1Component,
    pathMatch: 'full'
  },
  {
    path: 'calendarCFC/:year',
    component: CfcCalenderComponent,
    pathMatch: 'full'
  },
  {
    path: 'calendarCFC',
    component: CfcCalenderComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'index'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }

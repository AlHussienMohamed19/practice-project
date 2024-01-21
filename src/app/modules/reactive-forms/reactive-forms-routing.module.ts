import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsIndexComponent } from './forms-index/forms-index.component';
import { Form1Component } from './form-1/form-1.component';

const routes: Routes = [
  {
    path: 'index',
    component: FormsIndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'form1',
    component: Form1Component,
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
export class ReactiveFormsRoutingModule { }

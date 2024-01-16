import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';
import { LifeCycleIndexComponent } from './life-cycle-index/life-cycle-index.component';
import { NgDoCheckParentComponent } from './ng-do-check-parent/ng-do-check-parent.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';

const routes: Routes = [
  {
    path: "index",
    component: LifeCycleIndexComponent
  },
  {
    path: "DoCheck",
    component: NgDoCheckComponent
  },
  {
    path: "DoCheckParent",
    component: NgDoCheckParentComponent
  },
  {
    path: "OnChanges",
    component: NgOnChangesComponent
  },
  { path: '**', redirectTo: "index" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifeCycleRoutingModule { }

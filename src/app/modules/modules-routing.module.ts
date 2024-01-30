import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "calender",
    loadChildren: () =>
      import("./calender/calender.module").then(m => m.CalenderModule)
  },
  {
    path: "angularAnimation",
    loadChildren: () =>
      import("./angular-animation/angular-animation.module").then(m => m.AngularAnimationModule)
  },
  {
    path: "lifeCycle",
    loadChildren: () =>
      import("./life-cycle/life-cycle.module").then(m => m.LifeCycleModule)
  },
  {
    path: "reactiveForms",
    loadChildren: () =>
      import("./reactive-forms/reactive-forms.module").then(m => m.MyReactiveFormsModule)
  },
  { path: '**', redirectTo: "pages" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }

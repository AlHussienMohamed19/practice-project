import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "lifeCycle",
    loadChildren: () =>
      import("./life-cycle/life-cycle.module").then(m => m.LifeCycleModule)
  },
  { path: '**', redirectTo: "pages" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }

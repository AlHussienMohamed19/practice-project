import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularAnimationIndexComponent } from './angular-animation-index/angular-animation-index.component';

const routes: Routes = [
  {
    path: 'index',
    component: AngularAnimationIndexComponent,
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularAnimationRoutingModule { }

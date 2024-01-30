import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularAnimationRoutingModule } from './angular-animation-routing.module';
import { AngularAnimationComponent } from './angular-animation.component';
import { AngularAnimationIndexComponent } from './angular-animation-index/angular-animation-index.component';


@NgModule({
  declarations: [
    AngularAnimationComponent,
    AngularAnimationIndexComponent
  ],
  imports: [
    CommonModule,
    AngularAnimationRoutingModule
  ]
})
export class AngularAnimationModule { }

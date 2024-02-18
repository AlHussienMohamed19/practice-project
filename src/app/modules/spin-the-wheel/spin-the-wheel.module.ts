import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinTheWheelRoutingModule } from './spin-the-wheel-routing.module';
import { SpinTheWheelComponent } from './spin-the-wheel.component';
import { WheelIndexComponent } from './wheel-index/wheel-index.component';
import { WheelSpinningComponent } from './wheel-spinning/wheel-spinning.component';


@NgModule({
  declarations: [
    SpinTheWheelComponent,
    WheelIndexComponent,
    WheelSpinningComponent
  ],
  imports: [
    CommonModule,
    SpinTheWheelRoutingModule
  ]
})
export class SpinTheWheelModule { }

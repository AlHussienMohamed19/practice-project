import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { LifeCycleComponent } from './life-cycle.component';
import { NgDoCheckComponent } from './ng-do-check/ng-do-check.component';
import { LifeCycleIndexComponent } from './life-cycle-index/life-cycle-index.component';
import { NgDoCheckParentComponent } from './ng-do-check-parent/ng-do-check-parent.component';
import { NgOnChangesComponent } from './ng-on-changes/ng-on-changes.component';


@NgModule({
  declarations: [
    LifeCycleComponent,
    NgDoCheckComponent,
    LifeCycleIndexComponent,
    NgDoCheckParentComponent,
    NgOnChangesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LifeCycleRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LifeCycleModule { }

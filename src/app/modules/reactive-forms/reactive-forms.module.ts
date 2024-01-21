import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { FormsIndexComponent } from './forms-index/forms-index.component';
import { Form1Component } from './form-1/form-1.component';


@NgModule({
  declarations: [
    ReactiveFormsComponent,
    FormsIndexComponent,
    Form1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveFormsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MyReactiveFormsModule { }

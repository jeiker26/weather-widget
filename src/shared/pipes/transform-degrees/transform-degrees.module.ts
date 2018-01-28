import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformDegreesPipe } from './transform-degrees.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TransformDegreesPipe
  ],
  exports: [
    TransformDegreesPipe
  ]
})
export class TransformDegreesPipeModule { }

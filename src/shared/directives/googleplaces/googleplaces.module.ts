import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleplaceDirective } from './googleplaces.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GoogleplaceDirective
  ],
  exports: [
    GoogleplaceDirective
  ]
})

export class GoogleplaceDirectiveModule {
}

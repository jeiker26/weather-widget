import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCityComponent } from './search-city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialCustomModule } from 'shared/others/material.module';
import { GoogleplaceDirectiveModule } from 'shared/directives/googleplaces/googleplaces.module';

@NgModule({
  imports: [
    GoogleplaceDirectiveModule,
    MaterialCustomModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    SearchCityComponent
  ],
  exports: [
    SearchCityComponent
  ]
})
export class SearchCityModule { }

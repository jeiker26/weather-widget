import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatToolbarModule
} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule],
})

export class MaterialCustomModule {}

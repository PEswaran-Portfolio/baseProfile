import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatGridListModule,
  MatTabsModule,
  MatExpansionModule,
  MatSelectModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonToggleModule
} from '@angular/material';

@NgModule({
  imports: [
  CommonModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatGridListModule,
  MatTabsModule,
  MatExpansionModule,
  MatSelectModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonToggleModule
    ],
    exports: [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatGridListModule,
  MatTabsModule,
  MatExpansionModule,
  MatSelectModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonToggleModule
    ]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  DateAdapter,
  MatNativeDateModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ]
})
export class MatModule { }

import { NgModule } from '@angular/core';
import { MdToolbarModule } from '@angular/material/toolbar';
import { MdGridListModule } from '@angular/material/grid-list';
import { MdCardModule } from '@angular/material/card';
import { MdButtonModule } from '@angular/material/button';
import { MdIconModule } from '@angular/material/icon';
import { MdDialogModule } from '@angular/material/dialog';
import { MdFormFieldModule } from '@angular/material/form-field';
import { MdInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    MdToolbarModule,
    MdGridListModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdFormFieldModule,
    MdInputModule
  ],
  exports: [
    MdToolbarModule,
    MdGridListModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdDialogModule,
    MdFormFieldModule,
    MdInputModule
  ]
})
export class AppMdModule { }

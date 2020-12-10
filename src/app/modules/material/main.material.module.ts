import { NgModule } from '@angular/core';

import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  exports: [
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class MainMaterialModule { }

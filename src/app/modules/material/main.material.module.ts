import { NgModule } from '@angular/core';

import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  exports: [
    MatCardModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatIconModule
  ]
})
export class MainMaterialModule { }

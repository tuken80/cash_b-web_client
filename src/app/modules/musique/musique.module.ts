import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MusiqueVideosComponent } from './components/videos/videos.component';
import { MusiqueDownloadsComponent } from './components/downloads/downloads.component';

import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    MusiqueVideosComponent,
    MusiqueDownloadsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppModule
  ]
})
export class MusiqueModule { }

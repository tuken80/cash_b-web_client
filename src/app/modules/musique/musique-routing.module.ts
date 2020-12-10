import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MusiqueVideosComponent } from './components/videos/videos.component';
import { MusiqueDownloadsComponent } from './components/downloads/downloads.component';

const routes: Routes = [
  { path: 'videos', component: MusiqueVideosComponent },
  { path: 'donwloads', component: MusiqueDownloadsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class MusiqueRoutingModule {}

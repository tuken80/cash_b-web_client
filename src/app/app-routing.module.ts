import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'session', loadChildren: () => import(`./modules/session/session.module`).then(m => m.SessionModule) },
  { path: 'social', loadChildren: () => import(`./modules/social/social.module`).then(m => m.SocialModule) },
  { path: 'musique', loadChildren: () => import(`./modules/musique/musique.module`).then(m => m.MusiqueModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

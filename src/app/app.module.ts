import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ReseauxSociauxComponent } from './components/reseaux-sociaux/reseaux-sociaux.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ReseauxSociauxComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    HeaderComponent,
    ReseauxSociauxComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

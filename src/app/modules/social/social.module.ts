import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { MaterialModule } from "../material/material.module";

import { ContactComponent } from "./components/contact/contact.component";
import { MapComponent } from "./components/map/map.component";
import { NewsletterComponent } from "./components/newsletter/newsletter.component";

import { ContactFormComponent } from "./forms/contact/contact-form.component";
import { NewsletterFormComponent   } from "./forms/newsletter/newsletter-form.component";
import {AppModule} from "../../app.module";

@NgModule({
  declarations: [
    ContactComponent,
    MapComponent,
    NewsletterComponent,
    ContactFormComponent,
    NewsletterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppModule
  ]
})
export class SocialModule { }

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppSettings } from './app.settings';

import { ButtonModule } from 'primeng/button';
import { ApplicationModule } from './app-components/application/application.module';
import { LandingModule } from './app-components/landing/landing.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    ButtonModule,
    ApplicationModule,
    LandingModule,

    FullCalendarModule
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }

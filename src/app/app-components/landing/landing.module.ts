import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { CalendarComponent } from './landing-component/calendar/calendar.component';
import { LoginComponent } from './landing-component/login/login.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BookingServices } from '../booking/booking-services';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { SplitterModule } from 'primeng/splitter';
import { TooltipModule } from 'primeng/tooltip';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    LandingComponent,
    CalendarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,

    
    MenuModule,
    MenubarModule,
    ButtonModule,
    BreadcrumbModule,
    TableModule,
    InputTextModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextareaModule,
    ToastModule,
    CardModule,
    DividerModule,
    TagModule,
    SplitterModule,
    TooltipModule,
    PanelModule,

    FullCalendarModule

  ],
  providers:[
    BookingServices
  ]
})
export class LandingModule { }

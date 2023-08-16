import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { BookingServices } from '../booking/booking-services';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationRouterActivate } from './application-router-activate';


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
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule} from '@angular/common/http';
import { InputNumberModule } from 'primeng/inputnumber';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { SidebarModule } from 'primeng/sidebar';

import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    ApplicationComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,

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
    ToolbarModule,
    PanelModule,
    ImageModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    HttpClientModule,
    InputNumberModule,
    SkeletonModule,
    ProgressSpinnerModule,
    BlockUIModule,
    MessagesModule,
    SidebarModule,

    FullCalendarModule
  ],
  providers:[
    ApplicationRouterActivate
  ]
})
export class ApplicationModule { }

import { DatePipe, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Booking } from 'src/app/app-components/booking/booking';
import { BookingServices } from 'src/app/app-components/booking/booking-services';
import { BookingEventModel } from 'src/app/app-components/booking/booking.model';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [MessageService,DatePipe]
})
export class CalendarComponent {
  datePipe: any;
  constructor(
    private messageService: MessageService,
    private bookingService: BookingServices
  ) { }
  
  date = new Date();
  bookings: Booking[] = [];
  BookDate: string= "";
  articles = [
    { title: "Article 1", description: "Description 1"},
    { title: "Article 2", description: "Description 2"},
    { title: "Article 3", description: "Description 3"}
 ];

  public breadCrumbHome!: MenuItem;
  public breadCrumbItems: MenuItem[] = [];
  public bookingEvent : BookingEventModel[] = [];
  currentEvents = [{}
    // { title: 'event 1', start: '2023-08-17T06:13:00Z', end: '2023-08-18T04:13:00Z' },
    // { title: 'event 2', start: '2023-08-02T12:13:00Z', end:'2023-08-03T12:13:00Z' },
    // { title: 'event 3', date: '2023-08-15' },
    // { title: 'event 3', date: '2023-08-16' },
  ];

  events: any[]=[];
  calendarOptions: any;

  ngOnInit(): void {
    this.BookDate =  formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.breadCrumbHome = { icon: 'pi pi-home' };
    this.breadCrumbItems = [
      { label: 'Dashboard' }
    ];
    this.getBookings();
    this.loadCalendar();
  }

  getBookings(): void{
    this.bookings = [];
    this.bookingService.getBooking().then(data => 
      {
        // this.bookings = data;
        for (let i = 0; i < data.length; i++) {
          if (data[i].DateFrom == this.BookDate) {
            this.bookings.push({
              Guest: data[i].Guest,
              DateFrom: data[i].DateFrom,
              DateTo: data[i].DateTo,
              Room:  data[i].Room,
              ArrivalDateTime: data[i].ArrivalDateTime,
            })
              this.bookingEvent.push({
                title: data[i].Guest,
                start: data[i].DateFrom,
                end: data[i].DateTo,
              });
              this.currentEvents.push({
                title: data[i].Guest,
                 start: data[i].DateFrom,
                 end: data[i].DateTo,
             })
          }
        }
      }
    );
  }

  loadCalendar():void{
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      timeZone: 'local',
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      dateClick: this.handleDateClick.bind(this), // bind is important!
      events: this.currentEvents,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      }, editable: true,
      selectable:true,
      selectMirror: true,
      dayMaxEvents: true,
    };
  }

  handleDateClick(arg: { dateStr: string; }) {
    this.messageService.add({severity:'info', summary: 'Booking is loaded.', detail: 'Booking as of ' + arg.dateStr+' is loaded'});
    this.BookDate = arg.dateStr;
    this.getBookings();
  }
}

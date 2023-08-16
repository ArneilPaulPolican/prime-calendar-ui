import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BookingServices } from '../../booking/booking-services';
import { DatePipe } from '@angular/common';
import { Booking } from '../../booking/booking';
import { BookingEventModel } from '../../booking/booking.model';


import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [MessageService,DatePipe]
})
export class DashboardComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private bookingService: BookingServices
  ) { }
  ngOnInit(): void {
    this.getBookings();
    this.loadCalendar();
  }

  public bookingEvent : BookingEventModel[] = [];
  date = new Date();
  datePipe: any;
  events: any[]=[];
  calendarOptions: any;
  bookings: Booking[] = [];
  BookDate: string= "";
  currentEvents = [{}];


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

import { HttpClient } from "@angular/common/http";
import { Booking } from "./booking";
import { Injectable } from "@angular/core";

@Injectable()
export class BookingServices{
    constructor(private http: HttpClient) { }
    
    getBooking() {
        return this.http.get<any>('/assets/data.json')
        .toPromise()
        .then(res => <Booking[]>res.data)
        .then(data => { return data; });
    }
}
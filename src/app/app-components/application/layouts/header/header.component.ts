import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output('sidebarToggle') sidebarToggle: EventEmitter<any> = new EventEmitter();
  constructor(
  ) { }

  public sidebar:boolean=true;
  
 /**
  * toggleSidebar
  */
 public toggleSidebar() {
  this.sidebarToggle.emit();
 }

}

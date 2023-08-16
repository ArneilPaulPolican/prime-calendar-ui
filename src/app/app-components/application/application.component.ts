import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  // @ViewChild('main_side_nav') main_side_nav;
  constructor() { }

  
  public enableSidebar:boolean=true;
  /**
   * sidebarToggle
   */
  public sidebarToggle(): void {
    if(this.enableSidebar){
      this.enableSidebar = false;
    }else{
      this.enableSidebar = true;
    }
  }
  
  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openLinkedIn() {
    window.open("https://www.linkedin.com/in/kavin-v-aa9838220", "_blank");
  }
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  openLinkedIn(){
    window.location.href = "https://www.linkedin.com/in/kavin-v-aa9838220"; 
   }
}

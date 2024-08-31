import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test5',
  templateUrl: './test5.component.html',
  styleUrls: ['./test5.component.css']
})
export class Test5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
openEmail(){
  window.location.href = "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMlRGmtfRLwjTWFHhqGJwLZxZVGBLpcJtncnZtRLrQwvBgFxMsbbwjDNjfbfGWQXgFQhGwl";  
}
}

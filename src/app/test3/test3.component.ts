import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {
  constructor(private router:Router) { }
  name :number[]=[];
  ngOnInit(): void {
    
    
  }

  moveto2(){
 this.router.navigate(["/test2"]);
 for(let i=1; i<=10 ;i++){ 
  this.name.push(i);  
 }
 this.name.splice(0,1);
 this.name.pop();

 console.log(this.name);
}
}

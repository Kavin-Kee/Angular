import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  loginobj: any = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }
  welcome() {
    if (this.loginobj.email == 'welcome123@gmail.com' && this.loginobj.password == '123456') {
      this.router.navigateByUrl('/product');
    }
    else {
      alert("Wrong credentiels please use welcome123@gmail.com & 123456");
    }
  }
}

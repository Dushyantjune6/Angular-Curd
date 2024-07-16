import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { login } from '../login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from 'express';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
     HttpClientModule,
    ],
     providers: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  SignUpRequest() {
    throw new Error('Method not implemented.');
  }
  onLogin() {
    console.log("Here at 18")
    this.http.post('http://localhost:8080/api/login', this.logInObj).subscribe((res: any) => {
      if (res.result) {
        alert("Login Success")
      }
      alert(res.message)
    })
  }

  
  logInObj: login;

  constructor(private http: HttpClient,
    ) {
    this.logInObj = new login();
  }

}

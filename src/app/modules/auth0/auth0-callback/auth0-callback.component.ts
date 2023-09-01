import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth0-callback',
  templateUrl: './auth0-callback.component.html',
  styleUrls: ['./auth0-callback.component.css'],
})
export class Auth0CallbackComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.post('http://localhost:5050/user/create', {}).subscribe();
  }
}

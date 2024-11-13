import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth0-callback',
  templateUrl: './auth0-callback.component.html',
  styleUrls: ['./auth0-callback.component.scss'],
})
export class Auth0CallbackComponent implements OnInit {
  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http.post(`${environment.apiBaseUri}/auth/users`, {}).subscribe();
  }
}

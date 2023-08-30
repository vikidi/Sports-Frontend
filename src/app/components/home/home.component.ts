import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

import { MaterialModule } from '../../material.module';

import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { PolarConnectComponent } from '../polar-connect/polar-connect.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    MaterialModule,
    LoginComponent,
    LogoutComponent,
    PolarConnectComponent,
  ],
})
export class HomeComponent {
  constructor(public auth: AuthService) {}
}

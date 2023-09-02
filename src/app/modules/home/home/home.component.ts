import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [CommonModule, SharedModule],
})
export class HomeComponent {
  constructor(public auth: AuthService) {}
}

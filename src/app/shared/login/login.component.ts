import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [MatIconModule, MatButtonModule],
})
export class LoginComponent {
  constructor(public auth: AuthService) {}

  login(): void {
    this.auth.loginWithRedirect({
      appState: { target: '/home' },
    });
  }
}

import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Inject the authentication service into your component through the constructor
  constructor(public auth: AuthService) {}

  login(): void {
    // Call this to redirect the user to the login page
    this.auth.loginWithRedirect();
  }
}

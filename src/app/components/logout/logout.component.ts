import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  // Inject the authentication service into your component through the constructor
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public auth: AuthService
  ) {}

  logout(): void {
    // Call this to redirect the user to the login page
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}

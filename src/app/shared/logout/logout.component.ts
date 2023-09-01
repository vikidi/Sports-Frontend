import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout',
  standalone: true,
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  imports: [MatIconModule, MatButtonModule],
})
export class LogoutComponent {
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    public auth: AuthService
  ) {}

  logout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}

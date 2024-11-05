import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StyleManager } from 'src/app/services/style-manager.service';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../logout/logout.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    LoginComponent,
    LogoutComponent,
  ],
})
export class NavbarComponent {
  isDark: Observable<boolean>;
  isAdmin!: Observable<boolean>;

  constructor(public auth: AuthService, private styleManager: StyleManager) {
    this.isDark = this.styleManager.isDark();
    auth.user$.subscribe(
      (user) =>
        (this.isAdmin =
          user!['https://sports.villesaarinen.me/roles'].includes('Admin'))
    );
  }

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
  }
}

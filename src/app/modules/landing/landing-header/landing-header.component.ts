import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';

import { SharedModule } from 'src/app/shared/shared.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StyleManager } from 'src/app/services/style-manager.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-header',
  standalone: true,
  templateUrl: './landing-header.component.html',
  styleUrls: ['./landing-header.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class LandingHeaderComponent {
  isDark: Observable<boolean>;

  constructor(public auth: AuthService, private readonly styleManager: StyleManager) {
    this.isDark = this.styleManager.isDark();
  }

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
  }
}

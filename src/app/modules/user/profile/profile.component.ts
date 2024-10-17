import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '@auth0/auth0-angular';

import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PolarModule } from '../../polar/polar.module';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    PolarModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
})
export class ProfileComponent implements OnInit {
  profile!: Observable<Profile>;

  constructor(
    @Inject(DOCUMENT) private readonly doc: Document,
    public auth: AuthService,
    private readonly profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profile = this.profileService.getSelf();
  }

  logout(): void {
    this.auth.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      },
    });
  }
}

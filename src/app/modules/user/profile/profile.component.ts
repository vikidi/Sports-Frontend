import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '@auth0/auth0-angular';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { PolarModule } from '../../polar/polar.module';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  imports: [CommonModule, MatProgressSpinnerModule, SharedModule, PolarModule],
})
export class ProfileComponent implements OnInit {
  loading!: Observable<boolean>;
  profile!: Observable<Profile>;

  constructor(
    public auth: AuthService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.loading = this.profileService.getLoading();
    this.profile = this.profileService.getSelf();
  }
}

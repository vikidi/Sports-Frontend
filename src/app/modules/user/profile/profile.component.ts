import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class ProfileComponent implements OnInit {
  loading!: Observable<boolean>;
  profile!: Observable<Profile>;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loading = this.profileService.getLoading();
    this.profile = this.profileService.getSelf();
  }
}

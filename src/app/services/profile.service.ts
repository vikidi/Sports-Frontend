import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Profile } from '../models/profile.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl = `${environment.apiBaseUri}/user`;

  private profile$: BehaviorSubject<Profile> = new BehaviorSubject<Profile>(
    new Profile()
  );

  constructor(private http: HttpClient) {
    this.http.get<Profile>(`${this.baseUrl}/self`).subscribe({
      next: (data) => this.profile$.next(data),
    });
  }

  getSelf(): Observable<Profile> {
    return this.profile$;
  }
}

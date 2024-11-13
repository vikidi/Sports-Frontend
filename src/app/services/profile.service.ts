import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  public static readonly baseUrl = `${environment.apiBaseUri}/auth/users`;

  constructor(private readonly http: HttpClient) {}

  /**
   * Fetches the current user's profile.
   *
   * @returns An observable containing the user profile.
   */
  getSelf(): Observable<Profile> {
    return this.http.get<Profile>(ProfileService.baseUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, share } from 'rxjs';

import { Connection } from '../../models/connection.model';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  private baseUrl = `${environment.apiBaseUri}/auth/admin`;

  constructor(private http: HttpClient) {}

  get(id: string): Observable<Connection> {
    return this.http.get<Connection>(`${this.baseUrl}/${id}`).pipe(share());
  }
}

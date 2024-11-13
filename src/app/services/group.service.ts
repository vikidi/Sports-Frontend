import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  public static readonly baseUrl = `${environment.apiBaseUri}/auth/groups`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Group[]> {
    return this.http.get<Group[]>(`${GroupService.baseUrl}`);
  }

  get(id: string): Observable<Group> {
    return this.http.get<Group>(`${GroupService.baseUrl}/${id}`);
  }

  create(routeId: string): Observable<Group> {
    return this.http.post<Group>(`${GroupService.baseUrl}`, {
      routeId: routeId,
    });
  }

  delete(id: string): Observable<Group> {
    return this.http.delete<Group>(`${GroupService.baseUrl}/${id}`);
  }
}

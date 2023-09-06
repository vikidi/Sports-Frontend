import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private baseUrl = 'http://localhost:5050/group';

  private groups$: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);

  constructor(private http: HttpClient) {}

  getMyList(): Observable<Group[]> {
    if (!this.groups$.getValue().length) {
      this.http.get<Group[]>(`${this.baseUrl}/my-list`).subscribe({
        next: (data) => this.groups$.next(data),
      });
    }

    return this.groups$;
  }

  getOne(id: string): Observable<Group> {
    return this.http.get<Group>(`${this.baseUrl}/${id}`);
  }

  createNew(routeId: string): void {
    this.http
      .post<Group>(`${this.baseUrl}/create`, { routeId: routeId })
      .subscribe({
        next: (data) => this.groups$.next([...this.groups$.getValue(), data]),
      });
  }
}
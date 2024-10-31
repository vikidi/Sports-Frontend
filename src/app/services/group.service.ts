import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, share } from 'rxjs';

import { Group } from '../models/group.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private baseUrl = `${environment.apiBaseUri}/groups`;

  private groups$: BehaviorSubject<Group[]> = new BehaviorSubject<Group[]>([]);

  constructor(private http: HttpClient) {}

  getMyList(): Observable<Group[]> {
    if (!this.groups$.getValue().length) {
      this.http.get<Group[]>(`${this.baseUrl}`).subscribe({
        next: (data) => this.groups$.next(data),
      });
    }

    return this.groups$;
  }

  getOne(id: string): Observable<Group> {
    return this.http.get<Group>(`${this.baseUrl}/${id}`).pipe(share());
  }

  createNew(routeId: string): void {
    this.http.post<Group>(`${this.baseUrl}`, { routeId: routeId }).subscribe({
      next: (data) => this.groups$.next([...this.groups$.getValue(), data]),
    });
  }

  deleteOne(id: string): Observable<Group> {
    const call = this.http
      .delete<Group>(`${this.baseUrl}/${id}`, {})
      .pipe(share());
    call.subscribe({
      next: () =>
        this.groups$.next(
          [...this.groups$.getValue()].filter((x) => x._id !== id)
        ),
    });
    return call;
  }
}

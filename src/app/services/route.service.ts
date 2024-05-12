import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, share } from 'rxjs';

import { Route } from '../models/route.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private baseUrl = `${environment.apiBaseUri}/routes`;

  private routes$: BehaviorSubject<Route[]> = new BehaviorSubject<Route[]>([]);

  constructor(private http: HttpClient) {}

  getMyList(): Observable<Route[]> {
    if (!this.routes$.getValue().length) {
      this.http.get<Route[]>(`${this.baseUrl}/my-list`).subscribe({
        next: (data) => this.routes$.next(data),
      });
    }

    return this.routes$;
  }

  getOne(id: string): Observable<Route> {
    return this.http.get<Route>(`${this.baseUrl}/${id}`).pipe(share());
  }

  createNew(): void {
    this.http.post<Route>(`${this.baseUrl}/create`, {}).subscribe({
      next: (data) => this.routes$.next([...this.routes$.getValue(), data]),
    });
  }

  deleteOne(id: string): void {
    this.http.delete<Route>(`${this.baseUrl}/${id}`, {}).subscribe({
      next: () =>
        this.routes$.next(
          [...this.routes$.getValue()].filter((x) => x._id !== id)
        ),
    });
  }
}

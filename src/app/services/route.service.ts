import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';

import { Route } from '../models/route.model';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private baseUrl = 'http://localhost:5050/route';

  private routes$: BehaviorSubject<Route[]> = new BehaviorSubject<Route[]>([]);

  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {
    this.loading$.next(true);

    this.http.get<Route[]>(`${this.baseUrl}/my-list`).subscribe({
      next: (data) => this.routes$.next(data),
      error: () => this.loading$.next(false),
      complete: () => this.loading$.next(false),
    });
  }

  getLoading(): Observable<boolean> {
    return this.loading$;
  }

  getMyList(): Observable<Route[]> {
    return this.routes$;
  }

  createNew(): void {
    this.http.post<Route>(`${this.baseUrl}/create`, {}).subscribe({
      next: (data) => this.routes$.next([...this.routes$.getValue(), data]),
      error: () => this.loading$.next(false),
      complete: () => this.loading$.next(false),
    });
  }
}

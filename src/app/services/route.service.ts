import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Route } from '../models/route.model';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  private baseUrl = 'http://localhost:5050/route';

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
    return this.http.get<Route>(`${this.baseUrl}/${id}`);
  }

  createNew(): void {
    this.http.post<Route>(`${this.baseUrl}/create`, {}).subscribe({
      next: (data) => this.routes$.next([...this.routes$.getValue(), data]),
    });
  }
}

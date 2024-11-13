import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route } from '../models/route.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  public static readonly baseUrl = `${environment.apiBaseUri}/auth/routes`;

  constructor(private readonly http: HttpClient) {}

  getAll(): Observable<Route[]> {
    return this.http.get<Route[]>(RouteService.baseUrl);
  }

  get(id: string): Observable<Route> {
    return this.http.get<Route>(`${RouteService.baseUrl}/${id}`);
  }

  create(): Observable<Route> {
    return this.http.post<Route>(RouteService.baseUrl, {});
  }

  delete(id: string): Observable<Route> {
    return this.http.delete<Route>(`${RouteService.baseUrl}/${id}`);
  }
}

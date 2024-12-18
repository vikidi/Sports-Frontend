import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connection } from '../../models/connection.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  public static readonly baseUrl = `${environment.apiBaseUri}/auth/admin`;

  constructor(private http: HttpClient) {}

  get(id: string): Observable<Connection> {
    return this.http.get<Connection>(`${ConnectionService.baseUrl}/${id}`);
  }

  create(id: string): Observable<Connection> {
    return this.http.post<Connection>(`${ConnectionService.baseUrl}/${id}`, {});
  }

  update(id: string): Observable<Connection> {
    return this.http.patch<Connection>(
      `${ConnectionService.baseUrl}/${id}`,
      {}
    );
  }

  delete(id: string): Observable<Object> {
    return this.http.delete(`${ConnectionService.baseUrl}/${id}`);
  }

  activate(id: string): Observable<Object> {
    return this.http.post(`${ConnectionService.baseUrl}/${id}/activate`, {});
  }

  deactivate(id: string): Observable<Object> {
    return this.http.post(`${ConnectionService.baseUrl}/${id}/deactivate`, {});
  }
}

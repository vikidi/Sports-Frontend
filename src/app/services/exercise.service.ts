import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, share } from 'rxjs';

import { SimplifiedExercise } from '../models/simplified-exercise.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private baseUrl = `${environment.apiBaseUri}/auth/exercises`;

  private exercises$: BehaviorSubject<SimplifiedExercise[]> =
    new BehaviorSubject<SimplifiedExercise[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<SimplifiedExercise[]>(`${this.baseUrl}`).subscribe({
      next: (data) => this.exercises$.next(data),
    });
  }

  getMyList(): Observable<SimplifiedExercise[]> {
    return this.exercises$;
  }

  getOne(id: string): Observable<SimplifiedExercise> {
    return this.http
      .get<SimplifiedExercise>(`${this.baseUrl}/${id}`)
      .pipe(share());
  }

  updateGroup(id: string, newGroup: string): void {
    this.http
      .post(`${this.baseUrl}/${id}/update-group`, {
        newGroup: newGroup,
      })
      .subscribe();
  }

  deleteOne(id: string): Observable<SimplifiedExercise> {
    const call = this.http
      .delete<SimplifiedExercise>(`${this.baseUrl}/${id}`, {})
      .pipe(share());
    call.subscribe({
      next: () =>
        this.exercises$.next(
          [...this.exercises$.getValue()].filter((x) => x._id !== id)
        ),
    });
    return call;
  }
}

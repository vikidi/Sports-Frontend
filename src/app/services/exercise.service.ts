import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, share } from 'rxjs';

import { SimplifiedExercise } from '../models/simplified-exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private baseUrl = 'http://localhost:5050/exercise';

  private exercises$: BehaviorSubject<SimplifiedExercise[]> =
    new BehaviorSubject<SimplifiedExercise[]>([]);

  constructor(private http: HttpClient) {
    this.http.get<SimplifiedExercise[]>(`${this.baseUrl}/my-list`).subscribe({
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
}

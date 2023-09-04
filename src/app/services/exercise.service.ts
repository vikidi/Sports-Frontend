import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { SimplifiedExercise } from '../models/simplified-exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private baseUrl = 'http://localhost:5050/exercise';

  private exercises$: BehaviorSubject<SimplifiedExercise[]> =
    new BehaviorSubject<SimplifiedExercise[]>([]);

  public loading$ = new BehaviorSubject<boolean>(true);

  constructor(private http: HttpClient) {
    this.loading$.next(true);

    this.http.get<SimplifiedExercise[]>(`${this.baseUrl}/my-list`).subscribe({
      next: (data) => this.exercises$.next(data),
      error: () => this.loading$.next(false),
      complete: () => this.loading$.next(false),
    });
  }

  getLoading(): Observable<boolean> {
    return this.loading$;
  }

  getMyList(): Observable<SimplifiedExercise[]> {
    return this.exercises$;
  }
}

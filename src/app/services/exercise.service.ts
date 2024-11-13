import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry, share, timeout } from 'rxjs';

import { SimplifiedExercise } from '../models/simplified-exercise.model';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  public static readonly baseUrl = `${environment.apiBaseUri}/auth/exercises`;

  constructor(private readonly http: HttpClient) {}

  /**
   * Fetches all users own exercises from the server. The HTTP request is retried at most 3 times
   * in case of failure, and the request times out after 10 seconds.
   *
   * @returns An observable that emits all exercises as an array of
   *          {@link SimplifiedExercise} objects.
   */
  getAll(): Observable<SimplifiedExercise[]> {
    return this.http.get<SimplifiedExercise[]>(ExerciseService.baseUrl);
  }

  /**
   * Fetches a single exercise owned by the user by its ID from the server. The HTTP request is retried at most 3
   * times in case of failure, and the request times out after 10 seconds.
   *
   * @param exerciseId The ID of the exercise to be fetched.
   *
   * @returns An observable that emits the requested exercise as a
   *          {@link SimplifiedExercise} object.
   */
  get(exerciseId: string): Observable<SimplifiedExercise> {
    return this.http.get<SimplifiedExercise>(
      `${ExerciseService.baseUrl}/${exerciseId}`
    );
  }

  /**
   * Updates the group of a single exercise owned by the user by its ID on the server.
   * The HTTP request is retried at most 3 times in case of failure, and the request times out after 10 seconds.
   *
   * @param exerciseId The ID of the exercise to be updated.
   * @param newGroup The ID of the new group to which the exercise should be moved.
   *
   * @returns An observable that emits the updated exercise as a
   *          {@link SimplifiedExercise} object.
   */
  updateGroup(
    exerciseId: string,
    newGroup: string
  ): Observable<SimplifiedExercise> {
    return this.http.patch<SimplifiedExercise>(
      `${ExerciseService.baseUrl}/${exerciseId}`,
      {
        group: newGroup,
      }
    );
  }

  /**
   * Deletes a single exercise owned by the user by its ID from the server. The HTTP request is retried at most 3
   * times in case of failure, and the request times out after 10 seconds.
   *
   * @param exerciseId The ID of the exercise to be deleted.
   *
   * @returns An observable that emits the deleted exercise as a
   *          {@link SimplifiedExercise} object if the deletion was successful.
   */
  delete(exerciseId: string): Observable<SimplifiedExercise> {
    return this.http.delete<SimplifiedExercise>(
      `${ExerciseService.baseUrl}/${exerciseId}`
    );
  }
}

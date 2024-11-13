import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { SimplifiedExercise } from '../models/simplified-exercise.model';
import { ExerciseService } from './exercise.service';

describe('ExerciseService', () => {
  let exerciseService: ExerciseService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ExerciseService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    httpTesting = TestBed.inject(HttpTestingController);
    exerciseService = TestBed.inject(ExerciseService);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('#getAll should return an array of SimplifiedExercise objects on successful GET request', async () => {
    const returnExercises: SimplifiedExercise[] = [
      {
        _id: '1',
        sport: 'RUNNING',
        group: 'g1',
        startingEpoch: 0,
        parsedDate: new Date(),
        distanceMeters: 0,
        elapsedSec: 0,
        averageHeartRate: 0,
        averagePace: 0,
        averageCadence: 0,
        averageWatts: 0,
        trackPoints: [],
      },
      {
        _id: '2',
        sport: 'RUNNING',
        group: 'g2',
        startingEpoch: 0,
        parsedDate: new Date(),
        distanceMeters: 0,
        elapsedSec: 0,
        averageHeartRate: 0,
        averagePace: 0,
        averageCadence: 0,
        averageWatts: 0,
        trackPoints: [],
      },
    ];

    const exercises = exerciseService.getAll();
    const exercisesPromise = firstValueFrom(exercises);

    const req = httpTesting.expectOne(ExerciseService.baseUrl);
    expect(req.request.method).toBe('GET');

    req.flush(returnExercises);

    expect(await exercisesPromise).toEqual(returnExercises);
  });
});

import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProfileService } from './profile.service';
import { firstValueFrom } from 'rxjs';
import { Profile } from '../models/profile.model';

describe('ProfileService', () => {
  let profileService: ProfileService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProfileService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });

    httpTesting = TestBed.inject(HttpTestingController);
    profileService = TestBed.inject(ProfileService);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('#getSelf should return own profile on successful GET request', async () => {
    const returnProfile: Profile = {
      polarConnected: true,
    };

    const profile = profileService.getSelf();
    const profilePromise = firstValueFrom(profile);

    const req = httpTesting.expectOne(ProfileService.baseUrl);
    expect(req.request.method).toBe('GET');

    req.flush(returnProfile);

    expect(await profilePromise).toEqual(returnProfile);
  });

  it('#getSelf should return an error on failed GET request', async () => {
    const profile = profileService.getSelf();

    profile.subscribe({
      next: () => fail('should have failed with the 404 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(404);
        expect(error.error).withContext('message').toEqual('Error message');
      },
    });

    const req = httpTesting.expectOne(ProfileService.baseUrl);
    expect(req.request.method).toBe('GET');

    req.flush('Error message', {
      status: 404,
      statusText: 'Error status message',
    });
  });

  it('#getSelf should return an error on GET request with no internet connection', () => {
    const profile = profileService.getSelf();

    profile.subscribe({
      next: () => fail('should have failed with the 0 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(0);
      },
    });

    const req = httpTesting.expectOne(ProfileService.baseUrl);
    expect(req.request.method).toBe('GET');

    req.error(new ProgressEvent('Network error'));
  });
});

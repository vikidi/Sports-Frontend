import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable, Subscription, finalize } from 'rxjs';

import { AuthService } from '@auth0/auth0-angular';
import { ExerciseService } from 'src/app/services/exercise.service';

import { MatIconModule } from '@angular/material/icon';
import { SimplifiedExercise } from 'src/app/models/simplified-exercise.model';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
  ],
})
export class HomeComponent implements OnInit {
  public fileName: String = '';
  public uploadProgress: number | null = null;
  public uploadSub: Subscription | null = null;

  public exercises!: Observable<SimplifiedExercise[]>;

  constructor(
    public auth: AuthService,
    private http: HttpClient,
    private exerciseService: ExerciseService
  ) {}

  ngOnInit() {
    this.exercises = this.exerciseService.getMyList();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('exercise', file);
      const upload$ = this.http
        .post('http://localhost:5050/exercise/create', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(finalize(() => this.reset()));
      this.uploadSub = upload$.subscribe({
        next: (event: any) => {
          if (event.type == HttpEventType.UploadProgress) {
            this.uploadProgress = Math.round(
              100 * (event.loaded / event.total)
            );
          }
        },
      });
    }
  }

  reset() {
    this.uploadProgress = null;
    this.uploadSub = null;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';
import { SimplifiedExercise } from 'src/app/models/simplified-exercise.model';
import { ExerciseService } from 'src/app/services/exercise.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { RouteService } from 'src/app/services/route.service';
import { Route } from 'src/app/models/route.model';

@Component({
  selector: 'app-exercise-page',
  standalone: true,
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss'],
  imports: [
    SharedModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
})
export class ExercisePageComponent implements OnInit {
  @Input('id') exerciseId!: string;

  public exercise!: Observable<SimplifiedExercise>;
  public routes!: Observable<Route[]>;

  public groupControl = new FormControl('');

  constructor(
    private readonly exerciseService: ExerciseService,
    private readonly routeService: RouteService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.exercise = this.exerciseService
      .get(this.exerciseId)
      .pipe(shareReplay());

    this.exercise.subscribe((data) => {
      if (data.group?.length) this.groupControl.reset(data.group);
    });

    this.routes = this.routeService.getAll();
  }

  save() {
    this.exerciseService
      .updateGroup(this.exerciseId, this.groupControl.value ?? '')
      .subscribe();
  }

  deleteOne() {
    this.exerciseService.delete(this.exerciseId).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
    });
  }
}

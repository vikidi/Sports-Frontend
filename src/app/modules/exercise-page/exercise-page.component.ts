import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
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
  private routeSub!: Subscription;

  public exercise!: Observable<SimplifiedExercise>;
  public routes!: Observable<Route[]>;

  public groupControl = new FormControl('');

  constructor(
    private exerciseService: ExerciseService,
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.exercise = this.exerciseService.getOne(params['id']);

      this.exercise.subscribe((data) => {
        console.log(data);
        if (data.group?.length) this.groupControl.reset(data.group);
      });
    });

    this.routes = this.routeService.getMyList();
  }

  save() {
    console.log(this.groupControl.value);
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

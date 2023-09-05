import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { SimplifiedExercise } from 'src/app/models/simplified-exercise.model';
import { ExerciseService } from 'src/app/services/exercise.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-exercise-page',
  standalone: true,
  templateUrl: './exercise-page.component.html',
  styleUrls: ['./exercise-page.component.scss'],
  imports: [SharedModule],
})
export class ExercisePageComponent implements OnInit {
  private routeSub!: Subscription;

  public exercise!: Observable<SimplifiedExercise>;

  constructor(
    private exerciseService: ExerciseService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.exercise = this.exerciseService.getOne(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Route } from 'src/app/models/route.model';
import { RouteService } from 'src/app/services/route.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { GroupService } from 'src/app/services/group.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { meanBy, orderBy } from 'lodash';
import { lastTwoMovingAverages } from 'src/app/utils/movingAverage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-page',
  standalone: true,
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.scss'],
  imports: [
    SharedModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
  ],
})
export class RoutePageComponent implements OnInit {
  @Input('id') routeId!: string;

  public route?: Route;

  constructor(
    private readonly routeService: RouteService,
    private readonly groupService: GroupService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.routeService.get(this.routeId).subscribe((route) => {
      this.route = route;
    });
  }

  /**
   * Creates a new group for the route with the given ID and adds it to the route's
   * list of groups.
   */
  createNew() {
    this.groupService.create(this.routeId).subscribe((group) => {
      this.route?.groups.push(group);
    });
  }

  /**
   * Deletes the route with the given ID and navigates back to the list of all
   * routes.
   */
  deleteRoute() {
    this.routeService.delete(this.routeId).subscribe(() => {
      this.router.navigate(['/routes']);
    });
  }

  /**
   * Calculates the average distance in meters of all exercises in the route's
   * default group. If the default group is null or has no exercises, returns 0.
   * @param route the route to calculate the average distance for
   * @returns the average distance in meters
   */
  averageDistance(route: Route): number {
    const defaultGroup = route.defaultGroup;
    if (!defaultGroup || defaultGroup.exercises.length === 0) {
      return 0;
    }

    return meanBy(
      defaultGroup.exercises,
      (exercise) => exercise.distanceMeters
    );
  }

  /**
   * Given a group and a field in the group's exercises, this calculates the
   * average direction of change of the field over the last two values. If the
   * change is less than a specified percentage (default 0.1%), the function
   * returns 0 for flat. If the change is positive, the function returns 1, and
   * if the change is negative, the function returns -1.
   * @param group the group to check
   * @param field the field of the exercises to check
   * @param flatPercent the percentage change to consider "flat" (default 0.1)
   * @returns -1 if the average change is negative, 0 if it's flat, and 1 if it's
   * positive
   */
  averageDirection(
    group: any,
    field: string,
    flatPercent: number = 0.1
  ): number {
    const sortedExercises = orderBy(
      group.exercises,
      ['startingEpoch'],
      ['asc']
    );
    const fieldValues = sortedExercises.map((e: any) => e[field]);

    const [previousValue, latestValue] = lastTwoMovingAverages(fieldValues);

    if (
      previousValue === 0 ||
      Math.abs((latestValue - previousValue) / previousValue) * 100 <
        flatPercent
    ) {
      return 0;
    }

    return latestValue > previousValue ? 1 : -1;
  }
}

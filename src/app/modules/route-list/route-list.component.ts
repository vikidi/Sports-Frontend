import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from 'src/app/shared/shared.module';
import { Route } from 'src/app/models/route.model';
import { RouteService } from 'src/app/services/route.service';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { meanBy } from 'lodash';

@Component({
  selector: 'app-route-list',
  standalone: true,
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss'],
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
export class RouteListComponent implements OnInit {
  public routes?: Route[];

  constructor(private routeService: RouteService) {}

  /**
   * Initializes the component by fetching all routes from the RouteService.
   * Subscribes to the RouteService's getAll method to retrieve a list of routes
   * and assigns it to the component's routes property.
   */
  ngOnInit() {
    this.routeService.getAll().subscribe((routes) => {
      this.routes = routes;
    });
  }

  /**
   * Creates a new route by making a POST request to the backend API.
   * Once the new route is created, it is added to the local list of routes.
   */
  createNew() {
    this.routeService.create().subscribe((route) => {
      this.routes?.push(route);
    });
  }

  /**
   * Calculates the total number of exercises across all groups in the given route.
   *
   * @param route - The route object containing groups with exercises.
   * @returns The total number of exercises across all groups.
   */
  exerciseCount(route: Route): number {
    return route.groups.reduce(
      (total: any, next: any) => total + next.exercises.length,
      0
    );
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

    const distances = defaultGroup.exercises.map(
      (exercise) => exercise.distanceMeters
    );

    return meanBy(distances);
  }
}

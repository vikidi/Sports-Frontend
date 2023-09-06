import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  public routes!: Observable<Route[]>;

  exerciseCounter = (total: any, next: any) => total + next.exercises.length;

  averageDistance = (route: Route): number => {
    if (route.defaultGroup.exercises.length === 0) return 0;
    return meanBy(route.defaultGroup.exercises, (e: any) => e.distanceMeters);
  };

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.routes = this.routeService.getMyList();
  }

  createNew() {
    this.routeService.createNew();
  }
}

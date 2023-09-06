import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

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

import { meanBy } from 'lodash';
import { movingAverage } from 'src/app/utils/movingAverage';

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
  private routeSub!: Subscription;
  private routeId!: string;

  public route!: Observable<Route>;

  averageDistance = (route: Route): number => {
    if (route.defaultGroup.exercises.length === 0) return 0;
    return meanBy(route.defaultGroup.exercises, (e: any) => e.distanceMeters);
  };

  constructor(
    private routeService: RouteService,
    private activatedRoute: ActivatedRoute,
    private groupService: GroupService
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.route = this.routeService.getOne(params['id']);
      this.routeId = params['id'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  createNew() {
    this.groupService.createNew(this.routeId);
  }
}

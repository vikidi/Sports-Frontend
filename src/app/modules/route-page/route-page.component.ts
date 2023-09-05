import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Route } from 'src/app/models/route.model';
import { RouteService } from 'src/app/services/route.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-route-page',
  standalone: true,
  templateUrl: './route-page.component.html',
  styleUrls: ['./route-page.component.scss'],
  imports: [SharedModule, MatListModule, MatButtonModule],
})
export class RoutePageComponent implements OnInit {
  private routeSub!: Subscription;
  private routeId!: string;

  public route!: Observable<Route>;

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

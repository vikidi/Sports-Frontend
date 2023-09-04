import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MatListModule } from '@angular/material/list';
import { SharedModule } from 'src/app/shared/shared.module';

import { Route } from 'src/app/models/route.model';
import { RouteService } from 'src/app/services/route.service';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-route-list',
  standalone: true,
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.scss'],
  imports: [SharedModule, MatListModule, MatButtonModule],
})
export class RouteListComponent implements OnInit {
  public routes!: Observable<Route[]>;

  constructor(private routeService: RouteService) {}

  ngOnInit() {
    this.routes = this.routeService.getMyList();
  }

  createNew() {
    this.routeService.createNew();
  }
}

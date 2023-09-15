import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';

import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
import { StyleManager } from 'src/app/services/style-manager.service';
import { GroupChartsComponent } from './group-charts/group-charts.component';

@Component({
  selector: 'app-group-page',
  standalone: true,
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss'],
  imports: [
    SharedModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    GroupChartsComponent,
  ],
})
export class GroupPageComponent implements OnInit {
  private routeSub!: Subscription;

  public group!: Observable<Group>;

  constructor(
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute,
    private styleManager: StyleManager
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.group = this.groupService.getOne(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

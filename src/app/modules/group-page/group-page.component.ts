import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';

import { FlexLayoutModule } from '@angular/flex-layout';
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
  private groupId!: string;
  private routeId!: string;

  public group!: Observable<Group>;

  constructor(
    private readonly groupService: GroupService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.routeSub = this.activatedRoute.params.subscribe((params) => {
      this.group = this.groupService.getOne(params['id']);
      this.group.subscribe((g) => (this.routeId = g.route));
      this.groupId = params['id'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  deleteGroup() {
    this.groupService.deleteOne(this.groupId).subscribe({
      next: () => {
        this.router.navigate(['/routes', this.routeId]);
      },
    });
  }
}

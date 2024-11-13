import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input('id') groupId!: string;

  public group?: Group;

  constructor(
    private readonly groupService: GroupService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.groupService.get(this.groupId).subscribe((group) => {
      this.group = group;
    });
  }

  deleteGroup() {
    this.groupService.delete(this.groupId).subscribe(() => {
      this.router.navigate(['/routes', this.group?.route]);
    });
  }
}

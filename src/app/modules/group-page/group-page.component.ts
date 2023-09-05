import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/services/group.service';

import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-group-page',
  standalone: true,
  templateUrl: './group-page.component.html',
  styleUrls: ['./group-page.component.scss'],
  imports: [SharedModule, MatListModule],
})
export class GroupPageComponent implements OnInit {
  private routeSub!: Subscription;

  public group!: Observable<Group>;

  constructor(
    private groupService: GroupService,
    private activatedRoute: ActivatedRoute
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

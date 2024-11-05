import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Connection } from 'src/app/models/connection.model';
import { ConnectionService } from 'src/app/services/admin/connection.service';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-connection-page',
  standalone: true,
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss'],
  imports: [CommonModule, SharedModule, MatCardModule, MatButtonModule],
})
export class ConnectionPageComponent implements OnInit {
  public connection!: Observable<Connection>;
  private connectionId!: string;

  constructor(
    private readonly connectionService: ConnectionService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.connection = this.connectionService.get(params['id']);
      this.connectionId = params['id'];
    });
  }

  refresh() {}

  delete() {}

  activate() {}

  deactivate() {}
}

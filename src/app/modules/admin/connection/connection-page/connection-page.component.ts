import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Connection } from 'src/app/models/connection.model';
import { ConnectionService } from 'src/app/services/admin/connection.service';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { arraysEqual } from 'src/app/utils/arrayExtensions';

@Component({
  selector: 'app-connection-page',
  standalone: true,
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.scss'],
  imports: [CommonModule, SharedModule, MatCardModule, MatButtonModule],
})
export class ConnectionPageComponent implements OnInit {
  @Input('id') connectionId!: string;

  public connection?: Connection;

  constructor(private readonly connectionService: ConnectionService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    this.connectionService.get(this.connectionId).subscribe((connection) => {
      this.connection = connection;
    });
  }

  deleteConnection(): void {
    this.connectionService.delete(this.connectionId).subscribe(() => {
      this.connection = undefined;
    });
  }

  create(): void {
    this.connectionService
      .create(this.connectionId)
      .subscribe((newConnection) => {
        this.connection = newConnection;
      });
  }

  update(): void {
    this.connectionService
      .update(this.connectionId)
      .subscribe((updatedConnection) => {
        this.connection = updatedConnection;
      });
  }

  activate(): void {
    this.connectionService.activate(this.connectionId).subscribe(() => {
      this.refresh();
    });
  }

  deactivate(): void {
    this.connectionService.deactivate(this.connectionId).subscribe(() => {
      this.refresh();
    });
  }

  canBeUpdated(): boolean {
    return (
      this.connection !== undefined &&
      (this.connection.remoteUrl !== this.connection.url ||
        !arraysEqual(this.connection.remoteEvents, this.connection.events))
    );
  }

  arraysEqualProxy(a: any[], b: any[]) {
    return arraysEqual(a, b);
  }
}

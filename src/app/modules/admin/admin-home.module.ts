import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ConnectionPageComponent } from './connection/component-page/connection-page.component';
import { ConnectionListComponent } from './connection/list/connection-list.component';

@NgModule({
  declarations: [ConnectionListComponent],
  imports: [CommonModule, AdminHomeComponent, ConnectionPageComponent],
  providers: [],
  exports: [
    CommonModule,
    AdminHomeComponent,
    ConnectionPageComponent,
    ConnectionListComponent,
  ],
})
export class AdminHomeModule {}

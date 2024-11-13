import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-home',
  standalone: true,
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss'],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
  ],
})
export class AdminHomeComponent {
  template: any;

  select(template: any) {
    this.template = template;
  }
}

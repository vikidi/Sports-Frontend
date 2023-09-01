import { Component } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { LandingHeaderComponent } from '../landing-header/landing-header.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  imports: [SharedModule, LandingHeaderComponent],
})
export class LandingComponent {}

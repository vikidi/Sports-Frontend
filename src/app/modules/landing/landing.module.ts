import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingComponent } from './landing/landing.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';

@NgModule({
  imports: [CommonModule, LandingComponent, LandingHeaderComponent],
  declarations: [],
  providers: [],
  exports: [CommonModule, LandingComponent, LandingHeaderComponent],
})
export class LandingModule {}

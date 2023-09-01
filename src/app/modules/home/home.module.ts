import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, HomeComponent],
  declarations: [],
  providers: [],
  exports: [CommonModule, HomeComponent],
})
export class HomeModule {}

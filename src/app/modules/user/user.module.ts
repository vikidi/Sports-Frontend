import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [CommonModule, ProfileComponent],
  declarations: [],
  providers: [],
  exports: [CommonModule, ProfileComponent],
})
export class UserModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Auth0CallbackComponent } from './auth0-callback/auth0-callback.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Auth0CallbackComponent],
  providers: [],
  exports: [CommonModule, Auth0CallbackComponent],
})
export class Auth0Module {}

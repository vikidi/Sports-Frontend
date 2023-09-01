import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolarConnectComponent } from './polar-connect/polar-connect.component';
import { PolarCallbackComponent } from './polar-callback/polar-callback.component';

@NgModule({
  imports: [CommonModule, PolarConnectComponent],
  declarations: [PolarCallbackComponent],
  providers: [],
  exports: [CommonModule, PolarConnectComponent, PolarCallbackComponent],
})
export class PolarModule {}

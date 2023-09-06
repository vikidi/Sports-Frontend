import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoundPipe } from './pipes/round.pipe';
import { MetersToKilometersPipe } from './pipes/metersToKilometers.pipe';
import { PacePipe } from './pipes/pace.pipe';
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  imports: [
    CommonModule,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    NavbarComponent,
  ],
  declarations: [
    PageWrapperComponent,
    ContainerComponent,
    RoundPipe,
    MetersToKilometersPipe,
    PacePipe,
    TimePipe,
  ],
  providers: [],
  exports: [
    CommonModule,
    LoginComponent,
    LogoutComponent,
    PageWrapperComponent,
    ContainerComponent,
    FooterComponent,
    NavbarComponent,
    RoundPipe,
    MetersToKilometersPipe,
    PacePipe,
    TimePipe,
  ],
})
export class SharedModule {}

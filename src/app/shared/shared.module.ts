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
import { OrderByPipe } from './pipes/orderBy.pipe';
import { LastMovingAveragePipe } from './pipes/lastMovingAverage.pipe';
import { MapComponent } from './components/map/map.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    NavbarComponent,
    MapComponent,
    MatCardModule,
  ],
  declarations: [
    PageWrapperComponent,
    ContainerComponent,
    RoundPipe,
    MetersToKilometersPipe,
    PacePipe,
    TimePipe,
    OrderByPipe,
    LastMovingAveragePipe,
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
    OrderByPipe,
    LastMovingAveragePipe,
    MapComponent,
  ],
})
export class SharedModule {}

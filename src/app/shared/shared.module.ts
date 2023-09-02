import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageWrapperComponent } from './page-wrapper/page-wrapper.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    LoginComponent,
    LogoutComponent,
    FooterComponent,
    NavbarComponent,
  ],
  declarations: [PageWrapperComponent, ContainerComponent],
  providers: [],
  exports: [
    CommonModule,
    LoginComponent,
    LogoutComponent,
    PageWrapperComponent,
    ContainerComponent,
    FooterComponent,
    NavbarComponent,
  ],
})
export class SharedModule {}

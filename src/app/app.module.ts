import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthModule } from '@auth0/auth0-angular';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AuthModule.forRoot({
      domain: environment.auth0Domain,
      clientId: environment.auth0ClientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    LoginComponent,
    LogoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

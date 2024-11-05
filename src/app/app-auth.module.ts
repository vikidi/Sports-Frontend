import { NgModule } from '@angular/core';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

const authSetup = {
  domain: environment.auth0Domain,
  clientId: environment.auth0ClientId,
  authorizationParams: {
    redirect_uri: `${window.location.origin}/auth0-callback`,
    audience: environment.auth0Audience,
    scope: 'profile email create:admin read:admin update:admin delete:admin',
  },
  httpInterceptor: {
    allowedList: [
      {
        uri: `${environment.apiBaseUri}/auth/*`,
      },
      {
        uri: `${environment.auth0ApiBaseUri}*`,
        tokenOptions: {
          authorizationParams: {
            audience: environment.auth0ApiBaseUri,
            scope: 'read:current_user',
          },
        },
      },
    ],
  },
};

@NgModule({
  imports: [AuthModule.forRoot(authSetup)],
  exports: [AuthModule],
})
export class AppAuthModule {}

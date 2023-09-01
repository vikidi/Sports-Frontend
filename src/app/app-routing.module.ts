import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';

import { LandingComponent } from './modules/landing/landing/landing.component';
import { HomeComponent } from './modules/home/home/home.component';
import { PolarCallbackComponent } from './modules/polar/polar-callback/polar-callback.component';
import { Auth0CallbackComponent } from './modules/auth0/auth0-callback/auth0-callback.component';
import { ProfileComponent } from './modules/user/profile/profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'auth0-callback',
    component: Auth0CallbackComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'polar-callback',
    component: PolarCallbackComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

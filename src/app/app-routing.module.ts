import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth0/auth0-angular';

import { LandingComponent } from './modules/landing/landing/landing.component';
import { HomeComponent } from './modules/home/home/home.component';
import { PolarCallbackComponent } from './modules/polar/polar-callback/polar-callback.component';
import { Auth0CallbackComponent } from './modules/auth0/auth0-callback/auth0-callback.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { RouteListComponent } from './modules/route-list/route-list.component';
import { RoutePageComponent } from './modules/route-page/route-page.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { GroupPageComponent } from './modules/group-page/group-page.component';
import { ExercisePageComponent } from './modules/exercise-page/exercise-page.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'auth0-callback',
    component: Auth0CallbackComponent,
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
  {
    path: 'routes',
    component: RouteListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'routes/:id',
    component: RoutePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'groups/:id',
    component: GroupPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'exercises/:id',
    component: ExercisePageComponent,
    canActivate: [AuthGuard],
  },

  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

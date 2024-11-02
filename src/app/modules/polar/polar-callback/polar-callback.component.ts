import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-polar-callback',
  templateUrl: './polar-callback.component.html',
  styleUrls: ['./polar-callback.component.scss'],
})
export class PolarCallbackComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['error'] === 'access_denied') {
        this.router.navigateByUrl('/home');
        return;
      }

      this.http
        .post(`${environment.apiBaseUri}/auth/users/polar-token`, {
          code: params['code'],
        })
        .subscribe(() => {
          (() => {
            this.router.navigateByUrl('/home');
          })();
        });
    });
  }
}

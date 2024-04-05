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
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.http
        .post(`${environment.apiBaseUri}/user/polar-token`, {
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

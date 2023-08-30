import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-polar-callback',
  templateUrl: './polar-callback.component.html',
  styleUrls: ['./polar-callback.component.css'],
})
export class PolarCallbackComponent implements OnInit {
  private code: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.code = params['code'];
    });
  }
}

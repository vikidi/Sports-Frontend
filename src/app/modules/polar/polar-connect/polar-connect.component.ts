import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-polar-connect',
  standalone: true,
  templateUrl: './polar-connect.component.html',
  styleUrls: ['./polar-connect.component.css'],
})
export class PolarConnectComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  connect(): void {
    this.document.location.href = `https://flow.polar.com/oauth2/authorization?response_type=code&client_id=${environment.polarClientId}`;
  }
}

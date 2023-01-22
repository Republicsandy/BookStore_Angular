import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<div class="header"><app-header></app-header></div>
    <div class="main"><router-outlet></router-outlet></div>
    <div class="footer"><app-footer></app-footer></div>`,
  styles: [
    `
      .header {
        position: fixed;
        z-index: 2;
        width: 100%;
      }
      .footer {
        position: fixed;
        margin-top: 772px;
        width: 100%;
      }
      .main {
        position: absolute;
        margin-top: 53px;
        z-index: 0;
      }
    `,
  ],
})
export class HomeComponent {
  ngOnInit(): void { }
}

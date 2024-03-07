import { Component } from '@angular/core';

import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent],
  template: `
  <section class="header">
    <h1>
      <img src="../assets/images/logo.svg" alt="" />
      <span class="companyName">acmevil</span>
    </h1>
  <app-navbar></app-navbar>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



}

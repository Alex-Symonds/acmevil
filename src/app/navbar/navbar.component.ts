import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { CloseButtonComponent } from '../close-button/close-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent, CloseButtonComponent, CommonModule ],
  template: `
  <div class="{{ wrapperCSS() }}">
    <button
      class="burgerIcon"
      (click)="openNavBar()"
    >
      <svg preserveAspectRatio="none" width="36" height="36" version="1.1" viewBox="0 0 9.52 9.53" xmlns="http://www.w3.org/2000/svg"><g><rect x=".00176" y=".7" width="9.52" height="1.85" rx="1.06" ry="1.62"/><rect x="-4.73e-9" y="6.97" width="9.52" height="1.85" rx="1.06" ry="1.62"/><rect y="3.84" width="9.52" height="1.85" rx="1.06" ry="1.62"/></g></svg>
      <span class="burgerLabel">menu</span>
    </button>
    <div class="navAndCTA">
      <div class="closeButtonWrapper">
        <app-close-button
          [theme] = buttonProps.theme
          (closeFn) = "closeNavBar()"
        ></app-close-button>
      </div>
      <nav>
        <a
          *ngFor = "let navEle of navBarData"
          href="{{ navEle.url }}"
        >
          {{ navEle.display }}
        </a>
      </nav>
      <div class="ctaButtonWrapper">
        <app-button
          [theme] = buttonProps.theme
          [type] = buttonProps.type
          [size] = buttonProps.size
          (handleClick) = "testFn($event)"
        >
          contact us
        </app-button>
      </div>
    </div>
  </div>
  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  buttonProps = {
    size: "small",
    theme: "onLight",
    type: "primary", 
  }

  isOpen = false;

  navBarData = [
    {
      display: "Bespoke",
      url: "#"
    },
    {
      display: "Case Studies",
      url: "#"
    },
    {
      display: "Shop",
      url: "#"
    },
    {
      display: "Services",
      url: "#"
    },
    {
      display: "Henchpeople",
      url: "#"
    },
  ]


  testFn(event : Event){
    alert("Sorry, but this page is just a demo. You'll need to go elsewhere for your villaining needs.");
  }

  wrapperCSS(){
    return `navAndCTAWrapper-${ this.isOpen ? "on" : "off"}`
  }

  closeNavBar(){
    this.isOpen = false;
  }

  openNavBar(){
    this.isOpen = true;
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="strip footerStrip">
      <section class="footerContent">
        <div class="logoNameSubtitleContainer">
          <img src="./assets/images/logo-white.svg" width="55px" alt="" />
          <span class="companyName">acmevil</span>
          <span class="subtitle">good quality for evil intent</span>
        </div>

        <div class="footerInfoContainer">

          <div class="footerInfo">
            <span class="name">Loc.</span>
            <span class="value">Super Secret Volcano Base, Uncharted Island, Earth</span>
          </div>

          <div class="footerInfo">
            <span class="name">M.D.</span>
            <span class="value">S.&nbsp;Doommonger, PhD</span>
          </div>

          <div class="footerInfo">
            <span class="name">Reg.</span>
            <span class="value">666</span>
          </div>

        </div>

        <div class="socialMediaIconContainer">
          <a *ngFor = "let social of socials"
            href="{{ social.url }}"
          >
            <img src="{{ social.icon }}" alt="{{ social.altText }}" width="24px" />
          </a>
        </div>

      
        <div class="copyrightContainer">
          <span class="copyright">&#169; 2024 Acmevil Ltd. All rights reserved and enforced via an impressive array of sub-orbital lasers.</span>
        </div>
      </section>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  imagesURL = "./assets/images/";
  socials = [
    {
      url: '#',
      altText: 'Facebook',
      icon: `${this.imagesURL}socials-facebook.png`
    },
    {
      url: '#',
      altText: 'X/Twitter',
      icon: `${this.imagesURL}socials-xTwitter.png`
    },
    {
      url: '#',
      altText: 'LinkedIn',
      icon: `${this.imagesURL}socials-linkedin.png`
    },
  ];


}

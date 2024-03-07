import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-who-are-we',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="strip whoAreWeStrip">
      <section class="contentSection whoAreWeContent">
        <img class="logo" src="./assets/images/logo-white.svg" alt="" />
        <h3>{{ title }}</h3>
        <p 
          *ngFor="let paragraph of paragraphs"
        >
          {{ paragraph }}
        </p>
        <div class="linkWrapper">
          <a 
            href="#"
            class="secondaryBtn secondaryBtn-onDark largeBtn"
          >
            <span>read our story</span>
          </a>
        </div>
        <div class="awardsContainer">
          <div class="awardsRow">
            <img *ngFor="let award of awards"
              src="{{ award.pic }}"
              class="{{ getAwardCSS(award.css) }}"
              alt="{{ award.altText }}"
            />
          </div>
          <p>
            {{ getAwardText() }}
          </p>
        </div>
      </section>
    </div>
  `,
  styleUrl: './who-are-we.component.scss'
})
export class WhoAreWeComponent {
  title = "Who are we?";

  paragraphs = [
    "Established in 1897, Acmevil began as a family-owned mining business. After expanding into production of enriched uranium in the '40s, a chain of robberies from would-be supervillains almost put the company out of business.",
    "Recognising this as a symptom of unmet demand and observing the low quality projects that plagued the industry, we reoriented ourselves to work with the supervillainous community, instead of against them. Since then Acmevil has gone from strength to strength, supporting generations of supervillains in their attempts to spread discord and destruction.",
    "All our products are 100% unethically sourced."
  ]

  pathToImages = "./assets/images/";
  awards = [
    {
      pic: `${this.pathToImages}award_deathray.svg`,
      altText: 'Best R&D for Death Rays',
    },
    {
      pic: `${this.pathToImages}award_virusesbio.svg`,
      altText: 'Best R&D for Viruses (bio)',
    },
    {
      pic: `${this.pathToImages}award_supplier.svg`,
      altText: 'Best Supplier Overall',
      css: 'large'
    },
    {
      pic: `${this.pathToImages}award_customer.svg`,
      altText: 'Customer\'s Choice Award',
    },
    {
      pic: `${this.pathToImages}award_interiordesign.svg`,
      altText: 'Best Interior Design',
    },
  ]

  getAwardCSS(css? : string){
    return css === undefined
      ? "awardImg"
      : "awardImg awardImg-large";
  }

  getAwardText(){
    const intro = `Winner of ${this.awards.length} Villain's Digest 2023 Awards: `;
    const altTextArr = this.awards.map(award => award.altText);
    const altTextStr = altTextArr.join(", ");
    return intro + altTextStr;
  }

}

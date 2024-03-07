import { Component } from '@angular/core';
import { OtherCategoryCardComponent } from '../other-category-card/other-category-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-other-services',
  standalone: true,
  imports: [OtherCategoryCardComponent, CommonModule],
  template: `
  <div class="strip">
    <section class="contentSection">
      <h3>Other Services</h3>
      <div class="otherServicesCardRowWrapper">
        <div class="otherServicesCardRow">
          <app-other-category-card
            *ngFor="let cardData of otherServicesData"
            [data]="cardData"
          ></app-other-category-card>
        </div>
      </div>
    </section>
  </div>
  `,
  styleUrl: './other-services.component.scss'
})
export class OtherServicesComponent {
  pathToImages = "../assets/images/";

  otherServicesData = [
    {
      pic: `${this.pathToImages}apparel.webp`,
      url: "#",
      title: "Apparel",
      lines: [
        "for you", "for henchpeople", "for GM abominations"
      ]
    },
    {
      pic: `${this.pathToImages}recruitment.webp`,
      url: "#",
      title: "Recruitment",
      lines: [
        "high turnover?", "no problem!"
      ]
    },
    {
      pic: `${this.pathToImages}training.webp`,
      url: "#",
      title: "Training",
      lines: [
        "magical rituals", "marksmanship", "anti-monologuing"
      ]
    },
    {
      pic: `${this.pathToImages}legal.webp`,
      url: "#",
      title: "Legal",
      lines: [
        "face it: you'll need it"
      ]
    },
  ]
}

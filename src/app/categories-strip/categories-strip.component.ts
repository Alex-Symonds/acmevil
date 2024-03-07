import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainCategoryCardComponent } from '../main-category-card/main-category-card.component';

@Component({
  selector: 'app-categories-strip',
  standalone: true,
  imports: [CommonModule, MainCategoryCardComponent],
  template: `
    <div class="strip">
      <section class="contentSection mainCategoryCardRow">
        <app-main-category-card
          *ngFor="let cardData of categoriesData"
          [data]="cardData"
        ></app-main-category-card>
      </section>
    </div>
  `,
  styleUrl: './categories-strip.component.scss'
})
export class CategoriesStripComponent {

  pathToImages = "./assets/images/";

  categoriesData = [
    {
      title: 'technological',
      pic: `${this.pathToImages}deathray.svg`,
      text: "Trap doors and dungeons, armoured vehicles and giant robots, detonators and doomsday devices, ray guns of all types: we have what you need and if we don't, our award-winning R&D team will develop it for you.",
      pathToMore: '#',
    },
    {
      title: 'biological',
      pic: `${this.pathToImages}biohazard.svg`,
      text: "Whether your goal is a zombie apocalypse, a GM monstrosity, mind-controlled hordes, a deadly plague, a stitched-together abomination or to give everyone the sniffles, our laboratory has you covered.",
      pathToMore: '#',
    },
    {
      title: 'software',
      pic: `${this.pathToImages}virus.svg`,
      text: "Remotely activate super-weapons and trapdoors, monitor your security grid and manage payroll for your henchpeople all in one convenient app. We can also produce viruses customised to your particular needs.",
      pathToMore: '#',
    },
    {
      title: 'magical',
      pic: `${this.pathToImages}magic.svg`,
      text: "Found an ancient artefact? Summoning a demon? Our team of occult consultants can offer advice and training to prevent any ironic and/or unintended consequences for you and your team.",
      pathToMore: '#',
    },
  ]



}

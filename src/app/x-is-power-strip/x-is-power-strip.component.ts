import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-x-is-power-strip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="strip diagonalStrip">
      <section class="contentSection diagonalContent">
        <article class="diagonalHalf diagonalHalfA">
          <h3>{{ data.left.title }}</h3>
          <p 
            *ngFor="let paragraph of data.left.paragraphs"
          > 
            {{ paragraph }}
          </p>
          <div class="linksContainer">
            <a 
              href="{{ data.left.links.left.url }}"
              class="{{ data.left.links.left.css }}"
              >
              {{ data.left.links.left.display }}
            </a>
          </div>
          <p class="smallPrint">
            {{ data.left.smallPrint }}
          </p>

        </article>
        <article class="diagonalHalf diagonalHalfB">
          <h3>{{ data.right.title }}</h3>
          <p 
            *ngFor="let paragraph of data.right.paragraphs"
          > 
            {{ paragraph }}
          </p>
          <div class="linksContainer">
            <a 
              href="{{ data.right.links.left.url }}"
              class="{{ data.right.links.left.css }}"
            >
              {{ data.right.links.left.display }}
            </a>
            <a 
              href="{{ data.right.links.right.url }}"
              class="{{ data.right.links.right.css }}"
            >
              {{ data.right.links.right.display }}
            </a>
          </div>
          <p class="smallPrint">
            {{ data.right.smallPrint }}
          </p>

        </article>
      </section>
    </div>
  `,
  styleUrl: './x-is-power-strip.component.scss'
})
export class XIsPowerStripComponent {

  data = {
    left: {
      side: "left",
      title: "Knowledge is power",
      paragraphs: [
        "Acmevil's library contains tens of thousands of tomes covering every subject a supervillain could need. Our opposition to all forms of censorship (besides those enforced by our successful customers, of course!) is expressed via our world-leading collection of banned books. We value the privacy of our clients and do not report reading habits to local or world law enforcement or government organisations.",
        "For magically-inclined supervillains, we also maintain an extensive collection of spellbooks* and enchanted books* which are weapons themselves!"
      ],
      links: {
        left: {
          url: "#",
          display: "view packages",
          css: "primaryBtn primaryBtn-onLight largeBtn"
        }
      },
      smallPrint: "* Magical and enchanted books not available on standard subscription. Some magical and enchanted books require passing a training course and/or procurement of insurance."
    },
    right: {
      side: "right",
      title: "Money is power",
      paragraphs: [
        "For the budget-conscious supervillain, our experts have brought their experience to bear to create \"Basics\", a flexible range of off-the-shelf versions of all our most popular products. Cosmetic customisations are available on some lines, for a small additional fee.",
        "From time to time, we offer sales on ex-demonstration items. Sign up for our newsletter to be notified of upcoming sales.",
        "We can also offer competitive* payment plans and rental** agreements for some items."
      ],
      links: {
        left: {
          url: "#",
          display: "shop basics",
          css: "primaryBtn primaryBtn-onDark largeBtn"
        },
        right: {
          url: "#",
          display: "newsletter",
          css: "secondaryBtn secondaryBtn-onDark largeBtn"
        }
      },
      smallPrint: "* In comparison to financial practices so predatory as to be purely theoretical. ** If you do not keep up your rental payments or fail to return the item in its original condition, your soul may be forfeit."
    }
  }
}

import { Component } from '@angular/core';

import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <section class="hero">

      <div class="content">
        <div class="textWrapper">
          <h2>
            <div class="subtitleWrapper">
              <img class="subtitle"
                src="../assets/images/subtitle-with-decorations-white-pt1.svg"
                alt=""
              />
              <img class="subtitle"
                src="../assets/images/subtitle-with-decorations-white-pt2.svg"
                alt=""
              />
            </div>
            <span class="sr-only">
              good quality for evil intent
            </span>
          </h2>
          <p>
            {{ blahBlah }}
          </p>
          <div class="buttonContainer">
            <app-button
              [type] = buttonProps.type
              [theme] = buttonProps.theme
              [size] = buttonProps.size
              (handleClick) = "onClick($event)"
            >
              request a quote
            </app-button>
          </div>
        </div>
      </div>
      <picture class="decoration">
        <source srcset="../assets/images/hero.webp" media="(min-width: 943px)" />
        <source srcset="../assets/images/hero-closeup-wide.webp" media="(min-width: 630px)" />
        <source srcset="../assets/images/hero.webp" media="(min-width: 450px)" />
        <img 
          src="../assets/images/hero-closeup.webp"
          alt=""
        />
      </picture>
    </section>
  `,
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  blahBlah = "Acmevil is the world's #1 supplier of technological, biological, magical and software solutions for villains of all shapes, sizes, species and degrees of megalomania. Whether your goal is annihiliation, domination, material wealth or something more esoteric, Acmevil can support schemes of any scope with our range of standard and bespoke solutions.";

  buttonProps = {
    size: "large",
    theme: "onDark",
    type: "primary",
  }

  onClick(event : MouseEvent){
    alert("Sorry but this page is just a demo for a fictitious company, so quotes are unavailable.");
  }

}

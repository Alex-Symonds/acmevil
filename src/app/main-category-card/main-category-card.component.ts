import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-category-card',
  standalone: true,
  imports: [],
  template: `
    <div class="mainCategoryCard">
      <div class="topGroup">
        <img src="{{ data.pic }}" alt=""/>
        <h3>
          {{ data.title }}
        </h3>
        <p>
          {{ data.text }}
        </p>
      </div>
      <a href="{{ data.pathToMore }}">
        more info
      </a>
    </div>
  `,
  styleUrl: './main-category-card.component.scss'
})
export class MainCategoryCardComponent {
  @Input() data! : any;
}

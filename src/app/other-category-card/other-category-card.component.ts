import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-other-category-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="otherCategoryCard">
      <img 
        class="mainImg" 
        src="{{ data.pic }}" 
        alt="" 
        width="235px"
      />
      <div class="overlay">
      <h4>{{ data.title }}</h4>
      <div class="pointsContainer">
        <span 
          *ngFor="let point of data.lines"
        >
          {{ point }}
        </span>
      </div>
      </div>
    </article>
  `,
  styleUrl: './other-category-card.component.scss'
})
export class OtherCategoryCardComponent {
  @Input() data! : any;

}


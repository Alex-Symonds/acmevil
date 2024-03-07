import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="{{ calcCSS() }}"
      (click)="handleCloseClick($event)"
    >
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M6.33496 16.0461C5.88802 16.4931 5.88802 17.2177 6.33496 17.6646C6.78189 18.1116 7.50652 18.1116 7.95346 17.6646L11.9998 13.6183L16.0463 17.6648C16.4932 18.1117 17.2179 18.1117 17.6648 17.6648C18.1117 17.2178 18.1117 16.4932 17.6648 16.0463L13.6183 11.9998L17.6645 7.95364C18.1114 7.5067 18.1114 6.78208 17.6645 6.33514C17.2175 5.88821 16.4929 5.8882 16.046 6.33514L11.9998 10.3813L7.95379 6.33529C7.50685 5.88836 6.78223 5.88836 6.33529 6.33529C5.88835 6.78223 5.88835 7.50686 6.33529 7.95379L10.3813 11.9998L6.33496 16.0461Z" fill="#111111"/>
      </svg>
      <span>close</span>
    </button>
  `,
  styleUrl: './close-button.component.scss'
})
export class CloseButtonComponent {

  @Input() theme!: string;
  calcCSS(){
    const safeTheme = this.theme === "onDark" || this.theme === "onLight" 
    ? this.theme
    : "onLight";

    return `closeButton ${safeTheme}`;
  }

  @Output() closeFn = new EventEmitter<MouseEvent>();
  handleCloseClick(event : MouseEvent) {
    this.closeFn.emit(event);
  }

}

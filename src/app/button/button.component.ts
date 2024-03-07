import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button 
      class="{{ calcCSS() }}"
      (click)="handleButtonClick($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  
  @Input() theme!: string;
  @Input() type!: string;
  @Input() size!: string;

  calcCSS(){
    const safeTheme = this.theme === "onDark" || this.theme === "onLight" 
    ? this.theme
    : "onLight";

    const safeType = this.type === "primary" || this.type === "secondary" 
    ? this.type
    : "onDark";

    const safeSize = this.size === "small" 
      ? "small"
      : "large";

    return `${ safeType }Btn ${ safeType }Btn-${ safeTheme } ${safeSize}Btn`;
  }

  @Output() handleClick = new EventEmitter<MouseEvent>();
  handleButtonClick(event : MouseEvent) {
    this.handleClick.emit(event);
  }

}
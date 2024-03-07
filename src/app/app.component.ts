import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesStripComponent } from './categories-strip/categories-strip.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    CategoriesStripComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'acmevilHome';
}

import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesStripComponent } from './categories-strip/categories-strip.component';
import { WhoAreWeComponent } from './who-are-we/who-are-we.component';
import { XIsPowerStripComponent } from './x-is-power-strip/x-is-power-strip.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    CategoriesStripComponent,
    WhoAreWeComponent,
    XIsPowerStripComponent,
    OtherServicesComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'acmevilHome';
}

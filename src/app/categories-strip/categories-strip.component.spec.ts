import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesStripComponent } from './categories-strip.component';

describe('CategoriesStripComponent', () => {
  let component: CategoriesStripComponent;
  let fixture: ComponentFixture<CategoriesStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesStripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

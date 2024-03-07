import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCategoryCardComponent } from './other-category-card.component';

describe('OtherCategoryCardComponent', () => {
  let component: OtherCategoryCardComponent;
  let fixture: ComponentFixture<OtherCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherCategoryCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

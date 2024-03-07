import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XIsPowerStripComponent } from './x-is-power-strip.component';

describe('XIsPowerStripComponent', () => {
  let component: XIsPowerStripComponent;
  let fixture: ComponentFixture<XIsPowerStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XIsPowerStripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XIsPowerStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECabComponent } from './e-cab.component';

describe('ECabComponent', () => {
  let component: ECabComponent;
  let fixture: ComponentFixture<ECabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECabComponent]
    });
    fixture = TestBed.createComponent(ECabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EGroceriesComponent } from './e-groceries.component';

describe('EGroceriesComponent', () => {
  let component: EGroceriesComponent;
  let fixture: ComponentFixture<EGroceriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EGroceriesComponent]
    });
    fixture = TestBed.createComponent(EGroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

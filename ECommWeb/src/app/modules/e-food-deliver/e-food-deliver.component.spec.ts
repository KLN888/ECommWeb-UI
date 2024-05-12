import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFoodDeliverComponent } from './e-food-deliver.component';

describe('EFoodDeliverComponent', () => {
  let component: EFoodDeliverComponent;
  let fixture: ComponentFixture<EFoodDeliverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EFoodDeliverComponent]
    });
    fixture = TestBed.createComponent(EFoodDeliverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

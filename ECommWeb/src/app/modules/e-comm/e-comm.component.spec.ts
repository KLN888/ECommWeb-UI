import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommComponent } from './e-comm.component';

describe('ECommComponent', () => {
  let component: ECommComponent;
  let fixture: ComponentFixture<ECommComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommComponent]
    });
    fixture = TestBed.createComponent(ECommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

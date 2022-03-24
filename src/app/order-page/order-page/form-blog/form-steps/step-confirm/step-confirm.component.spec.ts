import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepConfirmComponent } from './step-confirm.component';

describe('StepConfirmComponent', () => {
  let component: StepConfirmComponent;
  let fixture: ComponentFixture<StepConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

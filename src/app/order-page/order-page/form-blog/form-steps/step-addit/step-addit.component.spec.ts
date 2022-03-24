import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepAdditComponent } from './step-addit.component';

describe('StepAdditComponent', () => {
  let component: StepAdditComponent;
  let fixture: ComponentFixture<StepAdditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepAdditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAdditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

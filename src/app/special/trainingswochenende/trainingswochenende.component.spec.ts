import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingswochenendeComponent } from './trainingswochenende.component';

describe('TrainingswochenendeComponent', () => {
  let component: TrainingswochenendeComponent;
  let fixture: ComponentFixture<TrainingswochenendeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingswochenendeComponent]
    });
    fixture = TestBed.createComponent(TrainingswochenendeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StangenlehrgangComponent } from './stangenlehrgang.component';

describe('StangenlehrgangComponent', () => {
  let component: StangenlehrgangComponent;
  let fixture: ComponentFixture<StangenlehrgangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StangenlehrgangComponent]
    });
    fixture = TestBed.createComponent(StangenlehrgangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

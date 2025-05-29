import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StableComponent } from './stable.component';

describe('StallangeboteComponent', () => {
  let component: StableComponent;
  let fixture: ComponentFixture<StableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StableComponent]
    });
    fixture = TestBed.createComponent(StableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

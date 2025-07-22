import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbzeichenComponent } from './abzeichen.component';

describe('AbzeichenComponent', () => {
  let component: AbzeichenComponent;
  let fixture: ComponentFixture<AbzeichenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbzeichenComponent]
    });
    fixture = TestBed.createComponent(AbzeichenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

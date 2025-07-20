import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglischLehrgangComponent } from './englisch-lehrgang.component';

describe('EnglischLehrgangComponent', () => {
  let component: EnglischLehrgangComponent;
  let fixture: ComponentFixture<EnglischLehrgangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglischLehrgangComponent]
    });
    fixture = TestBed.createComponent(EnglischLehrgangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

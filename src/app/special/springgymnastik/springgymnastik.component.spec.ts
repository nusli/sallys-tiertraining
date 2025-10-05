import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringgymnastikComponent } from './springgymnastik.component';

describe('SpringgymnastikComponent', () => {
  let component: SpringgymnastikComponent;
  let fixture: ComponentFixture<SpringgymnastikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringgymnastikComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpringgymnastikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

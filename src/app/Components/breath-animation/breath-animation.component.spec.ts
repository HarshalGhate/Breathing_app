import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreathAnimationComponent } from './breath-animation.component';

describe('BreathAnimationComponent', () => {
  let component: BreathAnimationComponent;
  let fixture: ComponentFixture<BreathAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreathAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreathAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

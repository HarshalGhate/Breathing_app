import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfCalmComponent } from './self-calm.component';

describe('SelfCalmComponent', () => {
  let component: SelfCalmComponent;
  let fixture: ComponentFixture<SelfCalmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfCalmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelfCalmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

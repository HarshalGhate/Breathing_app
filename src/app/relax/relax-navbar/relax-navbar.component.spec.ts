import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelaxNavbarComponent } from './relax-navbar.component';

describe('RelaxNavbarComponent', () => {
  let component: RelaxNavbarComponent;
  let fixture: ComponentFixture<RelaxNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelaxNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelaxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

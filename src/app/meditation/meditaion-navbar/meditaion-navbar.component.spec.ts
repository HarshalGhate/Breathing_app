import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditaionNavbarComponent } from './meditaion-navbar.component';

describe('MeditaionNavbarComponent', () => {
  let component: MeditaionNavbarComponent;
  let fixture: ComponentFixture<MeditaionNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditaionNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeditaionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

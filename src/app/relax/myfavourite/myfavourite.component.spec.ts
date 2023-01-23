import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfavouriteComponent } from './myfavourite.component';

describe('MyfavouriteComponent', () => {
  let component: MyfavouriteComponent;
  let fixture: ComponentFixture<MyfavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyfavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

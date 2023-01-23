import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelodiesNavComponent } from './melodies-nav.component';

describe('MelodiesNavComponent', () => {
  let component: MelodiesNavComponent;
  let fixture: ComponentFixture<MelodiesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelodiesNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelodiesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

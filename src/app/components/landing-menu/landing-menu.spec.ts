import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMenu } from './landing-menu';

describe('LandingMenu', () => {
  let component: LandingMenu;
  let fixture: ComponentFixture<LandingMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

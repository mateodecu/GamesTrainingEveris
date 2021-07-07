import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerGameComponent } from './banner-game.component';

describe('BannerGameComponent', () => {
  let component: BannerGameComponent;
  let fixture: ComponentFixture<BannerGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

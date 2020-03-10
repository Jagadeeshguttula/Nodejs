import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingsliderComponent } from './upcomingslider.component';

describe('UpcomingsliderComponent', () => {
  let component: UpcomingsliderComponent;
  let fixture: ComponentFixture<UpcomingsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

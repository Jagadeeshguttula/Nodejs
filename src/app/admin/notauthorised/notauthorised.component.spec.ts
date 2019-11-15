import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotauthorisedComponent } from './notauthorised.component';

describe('NotauthorisedComponent', () => {
  let component: NotauthorisedComponent;
  let fixture: ComponentFixture<NotauthorisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotauthorisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotauthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

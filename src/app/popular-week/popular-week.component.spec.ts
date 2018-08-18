import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularWeekComponent } from './popular-week.component';

describe('PopularWeekComponent', () => {
  let component: PopularWeekComponent;
  let fixture: ComponentFixture<PopularWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTodayComponent } from './popular-today.component';

describe('PopularTodayComponent', () => {
  let component: PopularTodayComponent;
  let fixture: ComponentFixture<PopularTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

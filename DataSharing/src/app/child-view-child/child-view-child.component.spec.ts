import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewChildComponent } from './child-view-child.component';

describe('ChildViewChildComponent', () => {
  let component: ChildViewChildComponent;
  let fixture: ComponentFixture<ChildViewChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildViewChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInputComponent } from './parent-input.component';

describe('ParentInputComponent', () => {
  let component: ParentInputComponent;
  let fixture: ComponentFixture<ParentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCoComponent } from './last-co.component';

describe('LastCoComponent', () => {
  let component: LastCoComponent;
  let fixture: ComponentFixture<LastCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

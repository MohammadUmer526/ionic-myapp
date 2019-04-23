import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPage } from './third.page';

describe('ThirdPage', () => {
  let component: ThirdPage;
  let fixture: ComponentFixture<ThirdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

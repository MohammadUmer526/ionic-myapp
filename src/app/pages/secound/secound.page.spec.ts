import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecoundPage } from './secound.page';

describe('SecoundPage', () => {
  let component: SecoundPage;
  let fixture: ComponentFixture<SecoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecoundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormContinueComponent } from './form-continue.component';

describe('FormContinueComponent', () => {
  let component: FormContinueComponent;
  let fixture: ComponentFixture<FormContinueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContinueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

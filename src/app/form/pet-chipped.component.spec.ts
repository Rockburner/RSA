/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetChippedComponent } from './pet-chipped.component';

describe('PetChippedComponent', () => {
  let component: PetChippedComponent;
  let fixture: ComponentFixture<PetChippedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetChippedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetChippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

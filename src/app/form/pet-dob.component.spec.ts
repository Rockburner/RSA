/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetDobComponent } from './pet-dob.component';

describe('PetDobComponent', () => {
  let component: PetDobComponent;
  let fixture: ComponentFixture<PetDobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetDobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

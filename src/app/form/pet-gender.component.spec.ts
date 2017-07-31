/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetGenderComponent } from './pet-gender.component';

describe('PetGenderComponent', () => {
  let component: PetGenderComponent;
  let fixture: ComponentFixture<PetGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

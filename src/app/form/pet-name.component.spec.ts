/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetNameComponent } from './pet-name.component';

describe('PetNameComponent', () => {
  let component: PetNameComponent;
  let fixture: ComponentFixture<PetNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

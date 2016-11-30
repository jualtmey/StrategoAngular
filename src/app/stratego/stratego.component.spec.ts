/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StrategoComponent } from './stratego.component';

describe('StrategoComponent', () => {
  let component: StrategoComponent;
  let fixture: ComponentFixture<StrategoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

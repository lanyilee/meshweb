/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IstioManageComponent } from './istio-manage.component';

describe('IstioManageComponent', () => {
  let component: IstioManageComponent;
  let fixture: ComponentFixture<IstioManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IstioManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IstioManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

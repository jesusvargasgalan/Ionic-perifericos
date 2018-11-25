import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPage } from './detalles.page';

describe('DetallesPage', () => {
  let component: DetallesPage;
  let fixture: ComponentFixture<DetallesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

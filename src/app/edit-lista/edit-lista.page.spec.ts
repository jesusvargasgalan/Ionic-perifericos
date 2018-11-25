import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListaPage } from './edit-lista.page';

describe('EditListaPage', () => {
  let component: EditListaPage;
  let fixture: ComponentFixture<EditListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
